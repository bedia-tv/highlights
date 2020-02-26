import React, {useState, useRef} from "react";
import ReactPlayer from "react-player";

interface Props {
  url: string;
  //time in second
  startTime: number;
  endTime: number;
  controls: boolean;
  width?: string;
  height?: string;
}

interface Progress {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

const PreviewPlayer = (props: Props) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const playerRef = useRef<ReactPlayer | null>(null);

  const handleSeek = () => {
    if (playerRef.current) {
      const player: ReactPlayer = playerRef.current;
      const currentDuration = player.getCurrentTime();
      player.seekTo(currentDuration + 10, 'seconds');
      setPlaying(true);
    }
  }

  const handleReady = () => {
    if (playerRef.current) {
      const player: ReactPlayer = playerRef.current;
      player.seekTo(props.startTime, 'seconds');
      setPlaying(true);
    }
  }

  const handleProgress = (played: Progress) => {
    if (played.playedSeconds >= props.endTime) {
      playerRef.current.seekTo(props.startTime);
    }
  }

  return (
    <>
      <ReactPlayer
        url={props.url}
        controls={props.controls}
        width={props.width}
        height={props.height}
        playing={false}
        onReady={handleReady}
        ref={playerRef}
        onProgress={handleProgress}
      />
    </>
  );
};

export default PreviewPlayer;
