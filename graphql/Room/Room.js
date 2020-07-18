module.exports = {
    Room: {
        owner: (parent, args, context) => {
            return context.prisma.room({ id: parent.id }).owner();
        },
        participants: (parent, args, context) => {
            return context.prisma.room({ id: parent.id }).participants();
        },
    },
};
