import * as React from 'react';
import {Container} from "./button.style";

type Props = {
  primary?: boolean;
  danger?: boolean;
}

export const Button: React.FC<Props> = (props) => {
  const { children, primary, danger } = props;
  return <Container primary={!!primary} danger={!!danger}>{children}</Container>;
};
