import React from "react";
import { Container, Label, ImageBox } from './thumbnail.style';

export const Thumbnail = props => {
  const { url } = props;

  return (
    <Container>
      <Label>Thumbnail</Label>
      <ImageBox src={url} />
    </Container>
  );
};
