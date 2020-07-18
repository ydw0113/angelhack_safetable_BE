const getUserId = require('../../utils');

module.exports = {
    Mutation: {
        createRoom: (parent, args, context, info) => {
            const userId = getUserId(context);
            return context.prisma.createRoom({
                name: args.name,
                question: args.question,
                answer: args.answer,
                choices: { set: args.choices },
                isActive: false,
                owner: { connect: { id: userId } },
            });
        },
    },
};
