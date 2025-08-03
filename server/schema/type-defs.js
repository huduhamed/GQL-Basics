// require instance of gpl
const { gql } = require('apollo-server');

// define user type
const typeDefs = gql`
	type User {
		id: ID!
		name: String!
		username: String!
		age: Int!
		nationality: Nationality!
		friends: [User]
		favoriteMovies: [Movie]
	}

	# movie type
	type Movie {
		id: ID!
		name: String!
		yearOfPublication: Int!
		isInTheatres: Boolean!
	}

	# define user Query
	type Query {
		users: [User!]!
		user(id: ID!): User!
		movies: [Movie!]!
		movie(name: String!): Movie!
	}

	# create user input
	input CreateUserInput {
		name: String!
		username: String!
		age: Int!
		nationality: Nationality = GHANA
	}

	# update user input
	input UpdateUsernameInput {
		id: ID!
		newUsername: String!
	}

	# user mutation
	type Mutation {
		createUser(input: CreateUserInput!): User
		updateUsername(input: UpdateUsernameInput!): User
		deleteUser(id: ID!): User
	}

	enum Nationality {
		GHANA
		TOGO
		NIGERIA
		AMERICA
		CANADA
	}
`;

module.exports = { typeDefs };
