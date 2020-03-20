import React, { useState, useEffect } from 'react';
import { Container } from './submission.page.style';
import { useActiveTabLocation } from '../../hooks';
import { Form } from '@frontend/components';
import { useMutation } from '@apollo/react-hooks';
import { useVideoQuery } from '@frontend/components';
import {Highlight} from '@frontend/components'
import {videoQueryResult} from "@frontend/components";

export const SubmissionPage = () => {

  /** 
   *  The SubmissionPage fetches using a videoQuery Service the video information
  * and passes that information to the shared (between the extension and PWA) 
  * Form Component in the directory libs/components/src/lib/form
  *
  * @return Form - the shared form component
  */

 

  // const location = useActiveTabLocation();

  // const { loading, data, error } = useVideoQuery(location);

  // if (loading) {
  //   return <div>loading ...</div>;
  // }

  return (
    <Container>
      <Form
        defaultValue={videoQueryResult.video}
      />
    </Container>
  );
};
