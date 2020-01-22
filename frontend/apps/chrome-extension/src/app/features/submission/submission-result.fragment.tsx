import React from 'react';
import styled from 'styled-components';

type SubmissionResult = 'SUCCESS' | 'FAILURE';

interface Props {
  result: string;
  error?: string;
}

export const SubmissionResult = (props: Props) => {
  const { result } = props;

  if (result === 'SUCCESS') {
    return <>Submission Succeeded.</>;
  } else {
    return <>Submission Failed.</>;
  }
};
