//toggle isActive of Room

// args : {name  of room, true or false ( change to )}

module.exports = {
    Mutation: {
        toggleRoom: async (_, args, context, info) => {
            return await context.prisma.updateRoom({
                data: { isActive: args.isActive },
                where: { name: args.name },
            });
        },
    },
};
