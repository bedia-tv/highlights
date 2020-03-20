import React, {forwardRef} from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: relative;
  padding-top: 60%;
  border-radius: 5px;
`;

type Props = {
  url: string;
  handleUpdate: (payload: UpdatePayload) => void;
}

type UpdatePayload = {
  endTime: number;
  duration: number;
}

export const Player = forwardRef((props: Props, ref) => {
  const {url, handleUpdate} = props;

  return (
    <Container>
      <StyledReactPlayer
        url={url}
        width="100%"
        height="100%"
        ref={ref}
        // onProgress={handleProgress}
        onDuration={(duration: number) => handleUpdate({endTime: duration, duration})}
      />
    </Container>
  );
});
