import styled, { css } from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  box-sizing: border-box;
  > button {
    margin: 0.5rem 0;
  }
`;

type ButtonProps = {
  primary?: boolean;
};

const Button = styled.button`
  font-weight: bold;
  width: 100%;
  height: 45px;
  padding: 6px 15px;
  border-radius: 5px;
  outline: none;
  background: white;
  color: #09d3ac;

  ${(props: ButtonProps) =>
    props.primary &&
    css`
      background: #09d3ac;
      color: white;
    `};

  font-size: 14px;
  border: none;
  box-sizing: border-box;
`;

const Input = styled.input`
  font-weight: bold;
  width: 100%;
  height: 35px;
  padding: 6px 15px;
  border-radius: 5px;
  outline: none;
  border: none;
  background: #f6f7f9;
  color: #748194;
  font-size: 14px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 1rem;
  margin: 0.5rem 0;
  width: 100%;
  font-weight: bold;
`;

const VideoPreviewBox = styled.div`
  width: 100%;
  height: 10rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 5px;
`;

const ThumbnailsBox = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 10rem;
  max-width: 100%;
  box-sizing: border-box;
  justify-content: center;
`;

const ImageBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  max-height: 10rem;
  max-width: 100%;
  box-sizing: border-box;
  justify-content: center;
  img {
    border: 1px solid #ddd; /* Gray border */
    border-radius: 4px; /* Rounded border */
    padding: 5px; /* Some padding */
    max-width: 90%;
  }
`;

const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const VideoPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20rem;
`;

export {
  VideoPreviewContainer,
  ThumbnailsBox,
  ImageBox,
  FormContainer,
  Input,
  Label,
  FieldBox,
  VideoPreviewBox,
  Button,
  ButtonContainer
};
