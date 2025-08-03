// internal imports
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import Data from './Data';
import './App.css';

function App() {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: 'http://localhost:4000/graphql',
	});

	return (
		<ApolloProvider client={client}>
			<Data />
		</ApolloProvider>
	);
}

export default App;
