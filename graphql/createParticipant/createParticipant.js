module.exports = {
    Mutation: {
        createParticipant: (parent, args, context, info) => {
            const userId = getUserId(context);
            return context.prisma.createParticipant({
                phone: args.phone,
                room: { connect: { name: args.roomName } },
            });
        },
    },
};
