import React from 'react';
import {Container} from './app.style';
import { SubmissionPage } from './features/submission';
import { Error, useFormState } from '@frontend/components';

const App = () => {
  const [{ error}, dispatch] = useFormState();

  if (error) {
    return (
      <Container>
        <Error message={error.message} onDismiss={() => dispatch({type: "RESET"})}/>
      </Container>
    );
  }

  return (
    <Container>
      <SubmissionPage/>
    </Container>
  );
};

export default App;
