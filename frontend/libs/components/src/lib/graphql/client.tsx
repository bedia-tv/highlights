import {createHttpLink} from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache} from 'apollo-cache-inmemory';

const host = process.env.HOST || 'http://localhost';
const port = process.env.PORT || '5000';

const uri = `${host}:${port}/graphql`;

console.log(`Listening Graph QL at ${uri}`);

const httpLink = createHttpLink({
  uri,
  credentials: 'include',
});


export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
