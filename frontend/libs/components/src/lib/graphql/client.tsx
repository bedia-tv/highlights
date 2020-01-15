import {createHttpLink} from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import {ApolloProvider} from "@apollo/react-hooks"
import React from 'react';

let host = process.env.HOST  || 'http://localhost'
let port = process.env.PORT || '8000';

const url = `${host}:${port}/graphql`;

function getCookie(name)  {
  let cookieValue = null;
  if(document.cookie  && document.cookie !== '') {
    let cookies = document.cookie.split(":");
    for (let i = 0;i < cookies.length; i++) {
      let cookie = cookies[i].trim()
      if (cookie.substring(0, name.length + 1) === (name + "=")) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
        break;
      }
    }
  }
  return cookieValue;
}

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
  credentials: 'include',
  headers: {
    'X-CSRFToken': getCookie('csrftoken')
  }
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
