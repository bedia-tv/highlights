import React from 'react';
import { Container } from './submission.page.style';
import {useActiveTabLocation} from '../../hooks/use-active-tab-location';
import {Form} from '@frontend/components';

export const SubmissionPage = () => {
  const location = useActiveTabLocation();
  return (
    <Container>
      <h1>Video Submission</h1>
      <Form url={location}/>
    </Container>
  )
};
