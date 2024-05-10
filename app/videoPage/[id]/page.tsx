"use client";
import React from "react";
import { useRouter } from "next/router";
import VideoPlayer from "@/app/components/videoPlayer";
import { useStore } from "@/app/state/useStore";

const VideoPage = ({ params }: any) => {
  const videos = useStore((state) => state.videos);
  const video = videos.find((video) => video.id === Number(params.id));

  return (
    <div>
      {video && (
        <div>
          <VideoPlayer videoUrl={`/videos/${video.id}.mp4`} />
        </div>
      )}
    </div>
  );
};

export default VideoPage;
