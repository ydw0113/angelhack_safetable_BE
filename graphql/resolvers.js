const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const APP_SECRET = 'angelhack-cogeukcogeuk';

const getUserId = (context) => {
    const Authorization = context.request.get('Authorization');
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '');
        const { userId } = jwt.verify(token, APP_SECRET);
        return userId;
    }

    throw new Error('Not authenticated');
};

const resolvers = {
    User: {
        rooms: (parent, args, context) => {
            return context.prisma.user({ id: parent.id }).rooms();
        },
    },
    Room: {
        owner: (parent, args, context) => {
            return context.prisma.room({ id: parent.id }).owner();
        },
    },
    Query: {
        Users: async (_, args, context, info) => await context.prisma.users(),
        Rooms: async (_, args, context, info) => await context.prisma.rooms(),
    },
    Mutation: {
        signup: async (_, args, context, info) => {
            const password = await bcrypt.hash(args.password, 10);
            const user = await context.prisma.createUser({ ...args, password });
            const token = jwt.sign({ userId: user.id }, APP_SECRET);
            return {
                token,
                user,
            };
        },
        login: async (_, args, context, info) => {
            const user = await context.prisma.user({ email: args.email });
            if (!user) {
                throw new Error('No such user found');
            }
            const valid = await bcrypt.compare(args.password, user.password);
            if (!valid) {
                throw new Error('Invalid password');
            }
            const token = jwt.sign({ userId: user.id }, APP_SECRET);
            return {
                token,
                user,
            };
        },
        makeRoom: (parent, args, context, info) => {
            const userId = getUserId(context);
            return context.prisma.createRoom({
                name: args.name,
                question: args.question,
                answer: args.answer,
                owner: { connect: { id: userId } },
            });
        },
    },
};
module.exports = resolvers;
