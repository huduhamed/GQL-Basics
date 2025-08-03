import { gql } from '@apollo/client';

// users query
export const QUERY_ALL_USERS = gql`
	query GetAllUsers {
		users {
			id
			name
			username
			age
			nationality
		}
	}
`;

// movies query
export const QUERY_ALL_MOVIES = gql`
	query GetAllMovies {
		movies {
			id
			name
			yearOfPublication
			isInTheatres
		}
	}
`;

// get a single movie by name
export const GET_MOVIE_NAME = gql`
	query Movie($name: String!) {
		movie(name: $name) {
			name
			yearOfPublication
		}
	}
`;

// user mutation
export const CREATE_USER_MUTATION = gql`
	mutation CreateUser($input: CreateUserInput!) {
		createUser(input: $input) {
			id
			name
			username
			age
			nationality
		}
	}
`;
