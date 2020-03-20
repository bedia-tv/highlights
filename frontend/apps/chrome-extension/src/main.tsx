import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './app/app';
import { client, FormContextProvider } from '@frontend/components';
import { ApolloProvider } from '@apollo/react-hooks';

const AppWithApolloProvider = () => (
  <ApolloProvider client={client}>
    <FormContextProvider>
      <App/>
    </FormContextProvider>
  </ApolloProvider>
);

ReactDOM.render(<AppWithApolloProvider/>, document.getElementById('root'));
