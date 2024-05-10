"use client";
import React from "react";
import VideoPlayer from "@/app/components/videoPlayer";
import { useStore } from "@/app/state/useStore";
import Thumbnail from "@/app/components/thumbnail";
import Link from "next/link";

const VideoPage = ({ params }: any) => {
  const videos = useStore((state) => state.videos);
  const video = videos.find((video) => video.id === Number(params.id));
  const filteredVideos = videos.filter((vid) => vid.id !== video?.id);

  return (
    <div className="bg-gray-800 min-h-screen p-5">
      {video && (
        <div className="mb-8">
          <VideoPlayer videoUrl={`/videos/${video.id}.mp4`} />
        </div>
      )}
      <div className="bg-gray-900 p-5">
        <h2 className="text-white text-lg mb-4 font-bold text-center">
          Outros vídeos
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-10">
          {filteredVideos.map((vid) => (
            <div
              className="w-full flex justify-center items-center"
              key={vid.id}
            >
              <Link href={`/videoPage/${vid.id}`}>
                <Thumbnail title={vid.title} imageSrc={vid.imageSrc} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
