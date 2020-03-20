import React from "react";
import styled from "styled-components";

const OuterRail = styled.div`
  position: absolute;
  width: 100%;
  height: 42px;
  transform: translate(0%, -50%);
  border-radius: 7px;
  cursor: pointer;
`;

const InnerRail = styled.div`
  position: absolute;
  width: 100%;
  height: 14px;
  transform: translate(0%, -50%);
  border-radius: 7px;
  background-color: rgb(155, 155, 155);
  pointer-events: none;
`;

export const SliderRail = props => {
  const { getRailProps } = props;
  return (
    <>
      <OuterRail {...getRailProps()} />
      <InnerRail />
    </>
  );
};
