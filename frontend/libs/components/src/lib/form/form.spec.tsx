import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import {MockedProvider} from '@apollo/react-testing';
import { render } from '@testing-library/react';
import {Form} from './form';
import {SUBMIT_VIDEO_MUTATION} from '../graphql/video'

const mocks = [
  {
    request: {
      query: SUBMIT_VIDEO_MUTATION
    },
    result: {
      data: {
        success: true,
      }
    }
  }
];

describe('Form', () => {

  it('should render successfully', () => {
    const { baseElement } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Form url="https://youtube.com"/>  
      </MockedProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
