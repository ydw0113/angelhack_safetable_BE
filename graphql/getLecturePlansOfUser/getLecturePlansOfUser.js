const getUserId = require('../../utils');

module.exports = {
    Query: {
        getLecturePlansOfUser: async (_, args, context, info) => {
            const userId = getUserId(context);
            return await context.prisma.user({ id: userId }).lecturePlans();
        },
    },
};
