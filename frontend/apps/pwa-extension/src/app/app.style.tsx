import styled from 'styled-components';

/**
 * Global styles for the PWA
 */

export const Container = styled.div`
  height: fit-content;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #09d3ac;
  width: 100vw;
  padding: 1rem 2rem;
  min-height: 100vh;
  box-sizing: border-box;
  min-width: 400px;
`;

export const Title = styled.div`
  color: #09d3ac;
  padding: 1rem 0;
`;
