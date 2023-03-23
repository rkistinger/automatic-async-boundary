import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

console.log(__webpack_share_scopes__);

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});

export function AppProviders({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
