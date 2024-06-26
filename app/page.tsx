"use client";
import Thumbnail from "./components/thumbnail";
import { useStore } from "./state/useStore";
import Link from "next/link";

export default function Home() {
  const videos = useStore((state) => state.videos);
  return (
    <main>
      <h1 className="p-5 text-white text-4xl font-bold text-center shadow-xl">
        Videos Bacanas da Semana
      </h1>
      <div className="p-5 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-10">
        {videos.map((video) => (
          <div
            className="w-full flex justify-center items-center"
            key={video.id}
          >
            <Link href={`/videoPage/${video.id}`}>
              <Thumbnail title={video.title} imageSrc={video.imageSrc} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
