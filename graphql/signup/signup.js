const bcrypt = require('bcrypt');
module.exports = {
    Mutation: {
        signup: async (_, args, context, info) => {
            const password = await bcrypt.hash(args.password, 10);
            const user = await context.prisma.createUser({ ...args, password });
            return user;
        },
    },
};
