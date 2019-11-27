import {createHttpLink} from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import {ApolloProvider} from "@apollo/react-hooks"
import React from 'react';

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
  credentials: 'include',
});


export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
