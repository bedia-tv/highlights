import * as React from 'react';
import {Container} from './button.style';

type Props = {
  children: React.ReactNode;
  primary?: boolean;
  danger?: boolean;
  type: 'submit' | 'reset';
};

export const Button: React.FC<Props> = props => {
  const {children, primary, danger, type} = props;
  return (
    <Container primary={!!primary} danger={!!danger} type={type}>
      {children}
    </Container>
  );
};
