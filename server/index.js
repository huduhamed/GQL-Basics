// require instance of apollo server
const { ApolloServer } = require('apollo-server');

// internal imports
const { typeDefs } = require('./schema/type-defs');
const { resolvers } = require('./schema/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

// server listening
server.listen().then(({ url }) => {
	console.log(`API is running on port: ${url}`);
});
