import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { ApolloProvider } from '@apollo/react-common';
import { client, FormContextProvider } from '@frontend/components';

const AppWithApolloProvider = () => (
  <ApolloProvider client={client}>
    <FormContextProvider>
      <App/>
    </FormContextProvider>
  </ApolloProvider>
);

ReactDOM.render(
  <BrowserRouter>
    <AppWithApolloProvider/>
  </BrowserRouter>,
  document.getElementById('root')
);
