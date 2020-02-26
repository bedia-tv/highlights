import React from 'react';
import styled from 'styled-components';

interface Props {
  tags: String;
}

const TagContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: justify;
  flex-wrap: wrap;

  span {
    margin-left: 0.4rem;
  }
`;

export const TagList = (props: Props) => {
  const { tags } = props;
  
  let regex = /(["'])(?:(?=(\\?))\2.)*?\1/g;

  if(tags.match(regex) === null) return null;
  
  return (
    <TagContainer>
      {
        tags.match(regex).map(tag => {
          return (
          <span key={tag}>#{tag.substr(1, tag.length - 2)}</span>
          )
        })
      }
    </TagContainer>
  )
};
