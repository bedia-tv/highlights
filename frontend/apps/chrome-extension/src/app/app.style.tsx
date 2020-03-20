import styled from 'styled-components';

/*

Global styles for the chrome extension

*/

export const Container = styled.div`
  font-family: "Montserrat",sans-serif;
  display: inline-flex;
  min-height: 100vh;
  width: fit-content;
  min-width: 25rem;
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
