import React from 'react';
import { Container } from './submission.page.style';
import {useActiveTabLocation} from '../../hooks/use-active-tab-location';

export const SubmissionPage = () => {
  const location = useActiveTabLocation();
  return (
    <Container>
      <h1>Video Submission</h1>
    </Container>
  )
};
