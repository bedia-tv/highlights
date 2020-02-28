import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { from } from 'apollo-link';

const API = "https://api.highlight-project.dev";

const uri = `${API}/graphql`;

console.log(`Listening Graph QL at ${uri}`);

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const httpLink = createHttpLink({
  uri,
  credentials: 'same-origin',
  headers: {
    'X-CSRFToken': getCookie('csrftoken')
  }
});

export const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache()
});
