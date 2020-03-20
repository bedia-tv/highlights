import React, { useState } from 'react';


interface Props {
  url: string;
  title?: string;
}

interface VideoInformationData {
  url: string;
  title: string;
  tags: string;
  thumbnail: string;
  startTime: number;
  stopTime: number;
}

export const Form: React.FC<Props> = ({ url, title = null }) => {
    return (
      <div>Hello World</div>
    )
};
