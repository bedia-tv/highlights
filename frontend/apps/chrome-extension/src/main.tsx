import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css'
import App from './app/app';
import {client } from '@frontend/components';
import {ApolloProvider} from '@apollo/react-hooks';

const AppWithApolloProvider = () => (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
);

ReactDOM.render(<AppWithApolloProvider/>, document.getElementById('root'));
