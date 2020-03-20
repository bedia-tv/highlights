import * as React from 'react';
import {Container} from './button.style';

type Props = {
  children: React.ReactNode;
  primary?: boolean;
  danger?: boolean;
  type: 'submit' | 'reset' | 'button';
  onClick?: () => void;
};

export const Button: React.FC<Props> = props => {
  const {children, primary, danger, type, onClick} = props;
  return (
    <Container primary={!!primary} danger={!!danger} type={type} onClick={onClick}>
      {children}
    </Container>
  );
};
