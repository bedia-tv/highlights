import {createHttpLink} from "apollo-link-http";
import ApolloClient from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: 'http://localhost:9002'
});


export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
