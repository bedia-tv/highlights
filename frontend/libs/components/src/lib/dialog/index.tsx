import * as React from 'react';
import {Container, Title, Body} from './dialog.style';
import { Button } from '../button/button';

type Props = {
  type: "success" | "error";
  onDismiss: () => void;
  message: string | null;
}

const DialogBox: React.FC<Props> = (props) => {
  const {type, onDismiss, message} = props;
  return (
    <Container>
      <Title color={`${type === "success" ? '#A6DDA5' : '#FF6B6B'}`}>{type}</Title>
      <Body>{message}</Body>
      <Button type={"button"} primary onClick={onDismiss}>Dismiss</Button>
    </Container>
  )
};

export const Error: React.FC<Partial<Props>> = (props) => {
  const {onDismiss, message} = props;
  return (
    <DialogBox type={'error'} onDismiss={() => {
      console.log('Clicked');
      onDismiss()
    }} message={message}/>
  )
};

export const Success: React.FC<Partial<Props>> = (props) => {
  const {onDismiss, message} = props;
  return (
    <DialogBox type={'success'} onDismiss={() => onDismiss} message={message}/>
  )
};

