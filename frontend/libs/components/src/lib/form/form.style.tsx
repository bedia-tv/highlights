import styled from 'styled-components';
import { DefaultCardStyle } from "../card";

export const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
`;

export const ButtonSection = styled.div`
  margin-top: 4em;
  display: flex;
  justify-content:  space-between;
`;

export const Container = styled.form`
  width: 20rem;
  ${DefaultCardStyle}
`;
