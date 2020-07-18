const getUserId = require('../../utils');

module.exports = {
    Query: {
        getRoomsOfUser: (parent, args, context, info) => {
            const userId = getUserId(context);
            return context.prisma.user({ id: userId }).rooms();
        },
    },
};
