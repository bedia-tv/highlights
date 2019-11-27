import React from 'react';

import styled from 'styled-components';

import { Route, Link, Switch } from 'react-router-dom';
import { Container } from './app.style';
import SubmissionPage from './features/submission/submission.page';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Container>
          <h1>Video Submission</h1>
          <Link to="/share">
            <h3>
              Share ?
            </h3>
          </Link>
        </Container>
      </Route>
      <Route path="/share" exact>
        <SubmissionPage/>
      </Route>
    </Switch>
  );
};

export default App;
