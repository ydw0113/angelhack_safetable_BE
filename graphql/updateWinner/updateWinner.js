module.exports = {
    Mutation: {
        updateWinner: (parent, args, context, info) => {
            return context.prisma.updateRoom({
                data: { winnerPhoneNumber: args.phone },
                where: { name: args.roomName },
            });
        },
    },
};
