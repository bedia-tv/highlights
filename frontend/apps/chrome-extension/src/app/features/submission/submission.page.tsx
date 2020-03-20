import React from 'react';
import { Container } from './submission.page.style';
import { useActiveTabLocation } from '../../hooks';
import { Form, Loading, useFormState } from '@frontend/components';
import { useVideoQuery } from '@frontend/components';

export const SubmissionPage = () => {
  const location = useActiveTabLocation();
  const { data, error } = useVideoQuery(location);
  const [_, dispatch] = useFormState();

  if (!!error) dispatch({type: 'ERROR', message:  error.message});

  if (data) {
    return (
      <Container>
        <Form
          defaultValue={data.video}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Loading/>
    </Container>
  );
};
