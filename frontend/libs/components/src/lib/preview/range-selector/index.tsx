import React from 'react';
import styled from 'styled-components';
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider';
import { SliderRail } from './slider-rail';
import { Handle } from './handle';
import { Track } from './track';

const Container = styled.div`
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  position: relative;
  width: 100%;
`;

const RangeSelector = props => {
  const { handleUpdate, handleChange } = props;
  const domain: number[] = [0, 100];

  const handleSliderUpdate = newUpdate => {
    handleUpdate({
      startTimeRatio: newUpdate[0] / 100,
      endTimeRatio: newUpdate[1] / 100
    });
  };

  const handleSliderValuesChange = newValues => {
    handleChange({
      startTimeRatio: newValues[0] / 100,
      endTimeRatio: newValues[1] / 100
    });
  };

  return (
    <Container>
      <StyledSlider
        mode={2}
        step={1}
        domain={domain}
        reversed={false}
        values={domain}
        onUpdate={handleSliderUpdate}
        onChange={handleSliderValuesChange}
      >
        <Rail>
          {({ getRailProps }) => <SliderRail getRailProps={getRailProps}/>}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={[0, 100]}
                  getHandleProps={getHandleProps}
                  disabled={false}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                  disabled={false}
                />
              ))}
            </div>
          )}
        </Tracks>
      </StyledSlider>
    </Container>
  );
};

export default RangeSelector;
