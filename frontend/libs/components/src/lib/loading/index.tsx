import styled  from 'styled-components';
import * as React from 'react';
import { DefaultCardStyle } from '../card';

const Container = styled.div`
  width: 20rem;
  ${DefaultCardStyle}
`;

export const Loading = () => {
  return (
    <Container>
      <h1>
        Loading ...
      </h1>
    </Container>
  )
};
