const getUserId = require('../../utils');

module.exports = {
    Query: {
        getCouponsOfUser: async (_, args, context, info) => {
            const userId = getUserId(context);
            return await context.prisma.user({ id: userId }).coupons();
        },
    },
};
