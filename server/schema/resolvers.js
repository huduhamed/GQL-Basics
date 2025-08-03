// internal imports
const { UserList, MovieList } = require('../fakeData');
const _ = require('lodash');

// define resolvers that'll handle queries
const resolvers = {
	Query: {
		// user resolvers
		users: () => {
			return UserList;
		},
		user: (parent, args) => {
			const id = args.id;
			const user = _.find(UserList, { id: Number(id) });
			return user;
		},

		// movie resolvers
		movies: () => {
			return MovieList;
		},

		movie: (parent, args) => {
			const name = args.name;
			const movie = _.find(MovieList, { name });
			return movie;
		},
	},
	User: {
		favoriteMovies: () => {
			return _.filter(
				MovieList,
				(movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2022
			);
		},
	},

	Mutation: {
		createUser: (parent, args) => {
			const user = args.input;
			const lastID = UserList[UserList.length - 1].id;
			user.id = lastID + 1;
			UserList.push(user);
			return user;
		},

		//update user
		updateUsername: (parent, args) => {
			const { id, newUsername } = args.input;
			let userUpdated;
			UserList.forEach((user) => {
				if (user.id === Number(id)) {
					user.username = newUsername;
					userUpdated = user;
				}
			});

			return userUpdated;
		},

		// delete user
		deleteUser: (parent, args) => {
			const id = args.id;
			_.remove(UserList, (user) => user.id === Number(id));
			return null;
		},
	},
};

module.exports = { resolvers };
