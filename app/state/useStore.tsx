import { create } from "zustand";

interface StateProps {
  videos: { id: number; title: string; imageSrc: string }[];
}

export const useStore = create<StateProps>()((get) => ({
  videos: [
    { id: 1, title: "Haiykuu", imageSrc: "/Thumbs/Thumb1.webp" },
    { id: 2, title: "Naruto Clássico", imageSrc: "/Thumbs/Thumb2.webp" },
    { id: 3, title: "Bleach", imageSrc: "/Thumbs/Thumb3.jpg" },
    { id: 4, title: "Yugioh", imageSrc: "/Thumbs/Thumb4.jpg" },
    { id: 5, title: "Godfrey", imageSrc: "/Thumbs/Thumb5.webp" },
    { id: 6, title: "Radahn", imageSrc: "/Thumbs/Thumb6.jpg" },
    {
      id: 7,
      title: "A Man Cannot Kill a God",
      imageSrc: "/Thumbs/Thumb7.webp",
    },
    { id: 8, title: "Outer Wilds", imageSrc: "/Thumbs/Thumb8.webp" },
    { id: 9, title: "Content Warning", imageSrc: "/Thumbs/Thumb9.png" },
  ],
}));
