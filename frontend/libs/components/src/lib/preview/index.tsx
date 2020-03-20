import React, {useRef, useState} from "react";
import styled from "styled-components";
import {Player} from "./player";
import {Duration} from "./duration";
import RangeSelector from "./range-selector";

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;

const DetailSection = styled.div`
  width: 100%;
  display: flex;
  margin: 1em 0;
  flex-direction: column;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  padding: 0.8em 0;
`;

const TimeDisplay = styled(Duration)`
  font-weight: 500;
  font-size: 1.5rem;
`;

const TimeLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

const SliderSection = styled.div`
  margin: 2em 0;
`;

export const Preview = props => {
  const {url, onUpdate} = props;
  const [playerState, setPlayerState] = useState({
    duration: 0.0,
    currentTime: 0.0,
    played: 0,
    startTime: 0.0,
    endTime: 0.0
  });

  const player = useRef(null);

  return (
    <>
      <Title>Preview</Title>
      <Player
        url={url}
        ref={player}
        handleUpdate={newUpdate => {
          onUpdate({
            interval: {
              startTime: playerState.startTime,
              endTime: playerState.endTime
            }
          });
          setPlayerState({...playerState, ...newUpdate});
        }}
      />
      <SliderSection>
        <RangeSelector
          handleChange={sliderUpdate => {
            console.log(sliderUpdate);
            player.current.seekTo(sliderUpdate.startTimeRatio, "fraction");
          }}
          handleUpdate={sliderUpdate => {
            setPlayerState({
              ...playerState,
              startTime: sliderUpdate.startTimeRatio * playerState.duration,
              endTime: sliderUpdate.endTimeRatio * playerState.duration
            });
          }}
        />
      </SliderSection>
      <DetailSection>
        <TimeBox>
          <TimeLabel>Start Time</TimeLabel>
          <TimeDisplay seconds={playerState.startTime}/>
        </TimeBox>
        <TimeBox>
          <TimeLabel>End Time</TimeLabel>
          <TimeDisplay seconds={playerState.endTime}/>
        </TimeBox>
      </DetailSection>
    </>
  );
};
