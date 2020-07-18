module.exports = {
    LecturePlan: {
        author: (parent, args, context) => {
            return context.prisma.lecturePlan({ id: parent.id }).author();
        },
    },
};
