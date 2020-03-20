import * as React from 'react';
import {Label, Input, Container} from './text-input.style';

type Props = {
  defaultValue?: string;
  name: string;
  label: string;
}

export const TextInput = React.forwardRef((props: Props, ref: React.Ref<{}>) => {
  const { label, name, defaultValue } = props;
  return (
    <Container>
      <Label>{label}</Label>
      <Input name={name} ref={ref} defaultValue={defaultValue} />
    </Container>
  );
});
