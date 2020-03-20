import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Container } from './app.style';
import SubmissionPage from './features/submission/submission.page';
import { useFormState, Error } from '@frontend/components';

const App = () => {
  const [{ error }, dispatch] = useFormState();

  if (!!error) {
    return (
      <Container>
        <Error message={error.message} onDismiss={() => dispatch({type: "RESET"})}/>
      </Container>
    );
  }

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
