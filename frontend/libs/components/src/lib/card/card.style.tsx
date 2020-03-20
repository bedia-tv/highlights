import styled, { css } from "styled-components";

export const DefaultCardStyle = css`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: white;
  margin: 2rem 0;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  height: fit-content;
`;

export const DefaultCard = styled.div`
  ${DefaultCardStyle}
`;
