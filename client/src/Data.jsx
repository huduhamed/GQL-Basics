import { useState } from 'react';

// internal imports
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION, GET_MOVIE_NAME, QUERY_ALL_MOVIES, QUERY_ALL_USERS } from './Queries';

const Data = () => {
	const [movieQuery, setMovieQuery] = useState('');

	// create user states
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [age, setAge] = useState(0);
	const [nationality, setNationality] = useState('');

	// gql queries
	const [createUser] = useMutation(CREATE_USER_MUTATION);
	const { data, error, loading, refetch } = useQuery(QUERY_ALL_USERS);
	const { data: moviesData } = useQuery(QUERY_ALL_MOVIES);
	const [fetchMovie, { data: movieQueriedData, error: movieError }] = useLazyQuery(GET_MOVIE_NAME);

	// console.log({ name, username, age, nationality });

	return (
		<>
			<div>
				<div>
					<input type="text" placeholder="Name..." onChange={(e) => setName(e.target.value)} />
					<input
						type="text"
						placeholder="Username.."
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input type="number" placeholder="Age..." onChange={(e) => setAge(e.target.value)} />
					<input
						type="text"
						placeholder="Nationality..."
						onChange={(e) => setNationality(e.target.value.toUpperCase())}
					/>
					<button
						onClick={() => {
							createUser({
								variables: { input: { name, username, age: Number(age), nationality } },
							});

							refetch();
						}}
					>
						Create User
					</button>
				</div>
				{data &&
					data.users.map((user) => {
						return (
							<div key={user.id}>
								<h1>Name: {user.name}</h1>
								<h1>Username: {user.username}</h1>
								<h1>Age: {user.age}</h1>
								<h1>Nationality: {user.nationality}</h1>
							</div>
						);
					})}
			</div>
			<div>
				{moviesData &&
					moviesData.movies.map((movie) => {
						return (
							<div key={movie.id}>
								<h1>Movie name: {movie.name}</h1>
							</div>
						);
					})}
			</div>
			<div>
				<input
					type="text"
					placeholder="Sinbad..."
					onChange={(e) => setMovieQuery(e.target.value)}
				/>
				<button
					onClick={() => {
						fetchMovie({ variables: { name: movieQuery } });
					}}
				>
					Fetch movie
				</button>
				<div>
					{movieQueriedData && (
						<div>
							<h1>MovieName: {movieQueriedData.movie.name}</h1>
							<h1>Year Of Publication: {movieQueriedData.movie.yearOfPublication}</h1>
						</div>
					)}
					{movieError && <h1>An error occured fetching movie data</h1>}
				</div>
			</div>
		</>
	);
};

export default Data;
