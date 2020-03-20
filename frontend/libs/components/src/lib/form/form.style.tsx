import styled from 'styled-components';
import { DefaultCardStyle } from "../card";

export const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
`;

export const ButtonSection = styled.div`
  margin-top: 4em;
  display: inline-flex;
`;

export const Container = styled.form`
  width: 20rem;
  ${DefaultCardStyle}
`;
