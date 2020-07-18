module.exports = {
    User: {
        rooms: (parent, args, context) => {
            return context.prisma.user({ id: parent.id }).rooms();
        },
        coupons: (parent, args, context) => {
            return context.prisma.user({ id: parent.id }).coupons();
        },
        lecturePlans: (parent, args, context) => {
            return context.prisma.user({ id: parent.id }).lecturePlans();
        },
    },
};
