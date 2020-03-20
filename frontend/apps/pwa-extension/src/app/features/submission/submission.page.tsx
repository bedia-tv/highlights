import React from 'react';
import { Container } from '../../app.style';
import { userQueryParams } from '../../hooks/use-query-params';
import {
  Form,
  useVideoQuery,
  useFormState, Loading, Error
} from '@frontend/components';

export default function SubmissionPage() {
  const query = userQueryParams();
  const url: string = query.get('text');
  const { loading, data, error } = useVideoQuery(url);
  const [_, dispatch] = useFormState();

  if (loading) {
    return (
      <Container>
        <Loading/>
      </Container>
    );
  }

  if (error) {
    dispatch({type: 'ERROR', message: error.message});
  }

  if(data) {
    return (
      <Container>
        <Form defaultValue={data.video}/>
      </Container>
    );
  }

  return null;
}
