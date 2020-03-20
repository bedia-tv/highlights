import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Montserrat",sans-serif;
  display: inline-flex;
  width: 100vw;
  min-height: 100vh;
  justify-content: center;
  background-color: #e5e5e5;
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  input:focus,
  button:focus {
    outline: none;
  }
`;
