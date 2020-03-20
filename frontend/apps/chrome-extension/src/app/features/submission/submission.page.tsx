import React from 'react';
import { Container } from './submission.page.style';
import { useActiveTabLocation } from '../../hooks';
import { Form, Loading, useFormState } from '@frontend/components';
import { useVideoQuery } from '@frontend/components';

export const SubmissionPage = () => {

  /** 
   *  The SubmissionPage fetches using a videoQuery Service the video information
  * and passes that information to the shared (between the extension and PWA) 
  * Form Component in the directory libs/components/src/lib/form
  *
  * @return Form - the shared form component
  */

 

  // const location = useActiveTabLocation();
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
