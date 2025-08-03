const UserList = [
	{
		id: 1,
		name: 'Folly',
		username: 'Jay',
		age: 24,
		nationality: 'GHANA',
	},
	{
		id: 2,
		name: 'Raquel',
		username: 'Smith',
		age: 20,
		nationality: 'NIGERIA',
		friends: [
			{
				id: 1,
				name: 'Folly',
				username: 'Jay',
				age: 24,
				nationality: 'GHANA',
			},
		],
	},
	{
		id: 3,
		name: 'Naila',
		username: 'Jones',
		age: 24,
		nationality: 'EYGPT',
	},
	{
		id: 4,
		name: 'Ben',
		username: 'Derick',
		age: 19,
		nationality: 'CANADA',
		friends: [
			{
				id: 5,
				name: 'Jordan',
				username: 'Ramon',
				age: 27,
				nationality: 'CAMEROON',
			},
		],
	},
	{
		id: 5,
		name: 'Jordan',
		username: 'Ramon',
		age: 27,
		nationality: 'AMERICA',
	},
];

const MovieList = [
	{
		id: 1,
		name: 'Sinbad',
		yearOfPublication: 2015,
		isInTheatres: true,
	},
	{
		id: 2,
		name: 'Alcatraz',
		yearOfPublication: 2018,
		isInTheatres: false,
	},
	{
		id: 3,
		name: 'Gorilla',
		yearOfPublication: 2010,
		isInTheatres: true,
	},
	{
		id: 4,
		name: 'Tree Life',
		yearOfPublication: 2025,
		isInTheatres: false,
	},
	{
		id: 1,
		name: 'All things equal',
		yearOfPublication: 2012,
		isInTheatres: true,
	},
];

module.exports = { UserList, MovieList };
