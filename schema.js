const {
    fileLoader,
    mergeResolvers,
    mergeTypes,
} = require('merge-graphql-schemas');
const path = require('path');
const { makeExecutableSchema } = require('graphql-tools');

const allTypes = fileLoader(path.join(__dirname, '/graphql/**/*.graphql'));
// api 폴더 안에 모든 폴더에 모든 graphql 파일을 불러온다.

const allResolvers = fileLoader(path.join(__dirname, '/graphql/**/*.js'));
// api 폴더 안에 모든 폴더에 모든 js(resolver) 파일을 불러온다.

const schema = makeExecutableSchema({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers),
});
// schema 변수에 typeDefs, resolvers를 정의하여 담아주고 그것을 export 해준다.

module.exports = schema;
