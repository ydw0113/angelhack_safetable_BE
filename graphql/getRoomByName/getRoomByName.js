module.exports = {
    Query: {
        getRoomByName: (parent, args, context, info) => {
            return context.prisma.room({ name: args.name });
        },
    },
};
