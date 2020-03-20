import React from 'react';
import { Container } from './submission.page.style';
import { useActiveTabLocation } from '../../hooks';
import { Form, Loading, useFormState } from '@frontend/components';
import { useVideoQuery } from '@frontend/components';

export const SubmissionPage = () => {
  const location = useActiveTabLocation();
  const { loading, data, error } = useVideoQuery(location);
  const [_ ,dispatch] = useFormState();

  if (!!loading) {
    return (
      <Container>
        <Loading/>
      </Container>
    );
  }

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
};
