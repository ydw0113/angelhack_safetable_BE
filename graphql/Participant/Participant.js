module.exports = {
    Participant: {
        room: (parent, args, context) => {
            return context.prisma.participant({ id: parent.id }).room();
        },
    },
};
