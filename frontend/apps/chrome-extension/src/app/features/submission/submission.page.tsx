import React, { useState, useEffect } from 'react';
import { Container } from './submission.page.style';
import { useActiveTabLocation } from '../../hooks';
import { Form, submissionMachine } from '@frontend/components';
import { useMachine } from '@xstate/react';
import { submissionService } from '@frontend/components';
import { SubmissionResult } from './submission-result.fragment';

const REQUEST_VIDEO_INFORMATION = 'request-video-information';
const FETCHED_VIDEO_INFORMATION = 'fetched-video-information';
const EXTENSION_OPENED = 'extension-opened';

export const SubmissionPage = () => {
  const location = useActiveTabLocation();
  // const [current, _] = useMachine(submissionMachine);
  const URL = location || 'https://www.youtube.com/watch?v=o6wtDPVkKqI';

  // if (current.value === 'idle') {
  return (
    <Container>
      <h1>Video Submission</h1>
      <Form url={URL} />
    </Container>
  );
  // }
};
