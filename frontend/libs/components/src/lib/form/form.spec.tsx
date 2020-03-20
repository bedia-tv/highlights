import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import { Form } from './form';
import { videoQueryResult } from '../__mock__';
import { SUBMIT_VIDEO_MUTATION } from '../graphql/video';
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import { FormContextProvider } from '@frontend/components';

const mocks = [
  {
    request: {
      query: SUBMIT_VIDEO_MUTATION
    },
    result: {
      data: {
        ok: true
      }
    }
  }
];

describe('Form', () => {

  it('should render successfully', () => {
    const { baseElement } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <FormContextProvider>
          <Form defaultValue={videoQueryResult.video}/>
        </FormContextProvider>
      </MockedProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
