module.exports = {
    Query: {
        getUsers: async (_, args, context, info) =>
            await context.prisma.users(),
    },
};
