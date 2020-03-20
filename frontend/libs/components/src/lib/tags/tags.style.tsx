import styled, {css} from 'styled-components';

export const Container = styled.div``;

export const TagStyle = css`
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0.2em 0.8em;
  font-size: 16px;
  margin-left: 0.4em;
  margin-top: 0.4em;
  border: none;
`;

export const Tag = styled.span`
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0.2em 0.8em;
  font-size: 16px;
  margin-left: 0.4em;
  margin-top: 0.4em;

  :hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  cursor: pointer;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const AddTagButton = styled.button`
  ${TagStyle};
  font-weight: bold;
`;

export const TagInput = styled.input`
  ${TagStyle};
  text-align: center;
  width: 4px;
`;

export const Label = styled.label`
  font-size: 16px;
`;
