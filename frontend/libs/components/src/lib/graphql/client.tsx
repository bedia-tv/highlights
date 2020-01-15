import {createHttpLink} from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache} from 'apollo-cache-inmemory';

const host = process.env.HOST || 'http://localhost';
const port = process.env.PORT || '5000';

const uri = `${host}:${port}/graphql`;

console.log(`Listening Graph QL at ${uri}`);

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
  uri,
  credentials: 'include',
  headers: {
    'X-CSRFToken': getCookie('csrftoken')
  }
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
