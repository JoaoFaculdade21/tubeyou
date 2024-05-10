import React, { useState, useRef } from "react";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      setIsPlaying(!video.paused);
    }
  };

  return (
    <div
      className="w-full max-h-[80%]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          autoPlay={isPlaying}
          className="w-full h-auto"
        />
        {isHovered && (
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white border-none px-4 py-2 text-lg cursor-pointer"
            onClick={togglePlay}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
