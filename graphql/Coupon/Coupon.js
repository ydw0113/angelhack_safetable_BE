module.exports = {
    Coupon: {
        owner: (parent, args, context) => {
            return context.prisma.coupon({ id: parent.id }).owner();
        },
    },
};
