import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { from } from 'apollo-link';
import fetch from 'unfetch';

const API = "http://localhost:5000";

const uri = `${API}/graphql`;

console.log(`Listening Graph QL at ${uri}`);

const httpLink = createHttpLink({
  uri,
  credentials: 'include',
  fetch: fetch
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([httpLink]),
});
