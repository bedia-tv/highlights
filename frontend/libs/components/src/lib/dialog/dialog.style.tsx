import styled from 'styled-components';
import { DefaultCardStyle } from '../card';

export const Container = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  ${DefaultCardStyle}
`;

type TitleProps = {
  color: string;
}

export const Title = styled.span`
  font-style: normal;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: capitalize;
  color: ${(props: TitleProps) => props.color}
`;

export const Body = styled.p`
  width: 100%;
  text-align: center;
  margin: 2rem 0;
`;
