import React, { useEffect, useRef, useState } from "react";
import "./musicplayer.css";
const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicTrack, SetCurrentMusicTrack] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const tracks = [
    {
      title: "Track 1",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Track 2",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Track 3",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Track 4",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Track 5",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
      image: "https://via.placeholder.com/150",
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTrackProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handlePlayAndPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleSkipTrack = (getDirection) => {
    if (getDirection === "forward") {
      SetCurrentMusicTrack((prevTrack) => (prevTrack + 1) % tracks.length); // getDirection=5 then (4+1)=5 % 5 = 0  // as we know the length of track aray is 0 based indexing
    } else if (getDirection === "backword") {
      SetCurrentMusicTrack(
        (prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length
      );
    }
    audioRef.current.play(); // if user has paused the music in previous play then after forwarding or backwording the track the music should play even if itis paused in previous track
    setIsPlaying(false);
    setTrackProgress(0);
  };
  return (
    <div className="music-player">
      <h2>Music Player</h2>
      <h2>{tracks[currentMusicTrack].title}</h2>
      <img
        src={tracks[currentMusicTrack].image}
        alt={tracks[currentMusicTrack].title}
      />
      <audio ref={audioRef} src={tracks[currentMusicTrack].source} />
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${trackProgress}%`,
            background: isPlaying ? "#3498db" : "red",
            height: "15px",
          }}
        ></div>
      </div>
      <div className="track-controls">
        <button onClick={() => handleSkipTrack("backword")}>Backword</button>
        <button on onClick={handlePlayAndPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button onClick={() => handleSkipTrack("forward")}>Forward</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
