module.exports = {
    Query: {
        getRooms: async (_, args, context, info) =>
            await context.prisma.rooms(),
    },
};
