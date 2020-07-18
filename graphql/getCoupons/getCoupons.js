module.exports = {
    Query: {
        getCoupons: async (_, args, context, info) =>
            await context.prisma.coupons(),
    },
};
