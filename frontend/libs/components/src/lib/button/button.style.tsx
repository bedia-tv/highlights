import styled, { css } from "styled-components";

type Props = {
  primary: boolean;
  danger: boolean;
}

export const Container = styled.button<Props>`
  padding: 0.7rem 3rem;
  background: white;
  color: black;
  text-transform: uppercase;
  border-radius: 5px;
  font-weight: bold;

  ${(props: Props) =>
  props.primary &&
  css`
      background: #c4c4c4;
      color: white;
      border-radius: 5px;
    `}

  ${props =>
  props.danger &&
  css`
      background: transparent;
      color: #ff8d8d;
      border: none;
    `}
`;
