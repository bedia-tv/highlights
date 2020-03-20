import styled from 'styled-components';
import {Duration} from "./duration";

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

export const DetailSection = styled.div`
  width: 100%;
  display: flex;
  margin: 1em 0;
  flex-direction: column;
`;

export const TimeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  padding: 0.8em 0;
`;

export const TimeDisplay = styled(Duration)`
  font-weight: bold;
  font-size: 1.5rem;
  font-style: normal;
`;

export const TimeLabel = styled.label`
  font-size: 16px;
`;

export const SliderSection = styled.div`
  margin: 2em 0;
`;
