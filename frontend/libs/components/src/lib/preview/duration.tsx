import * as React from 'react';
import styled, {css} from 'styled-components';
import {utils} from '../utils';

type TimeProps = {
  fontSize?: number;
}

const Time = styled.time<TimeProps>`
  ${(props: TimeProps) =>
  props.fontSize &&
  css`
      font-size: ${props.fontSize}em;
    `}
  font-weight: bold;
`;

type DurationProps = TimeProps & {
  seconds: number;
}

export const Duration = (props: DurationProps) => {
  const { seconds, fontSize = 1.5 } = props;
  return (
    <Time dateTime={`P${Math.round(seconds)}S`} fontSize={fontSize}>
      {utils.format(seconds)}
    </Time>
  );
};
