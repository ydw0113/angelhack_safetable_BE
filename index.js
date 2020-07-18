const { GraphQLServer } = require('graphql-yoga');
// const resolvers = require('./graphql/resolvers');
const { prisma } = require('./prisma/generated/prisma-client');

const schema = require('./schema.js');

const server = new GraphQLServer({
    // typeDefs: 'graphql/schema.graphql',
    // resolvers,
    schema,
    context: (request) => {
        return { ...request, prisma };
    },
});
server.start(
    {
        port: process.env.PORT || 5000,
        endpoint: '/graphql',
        playground: '/playground',
        subscriptions: '/subscriptions',
    },
    ({ port }) => {
        console.log('graphql server started', port);
    }
);
