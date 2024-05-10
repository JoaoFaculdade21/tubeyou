import { create } from "zustand";

interface StateProps {
  videos: { id: number; title: string; imageSrc: string }[];
}

export const useStore = create<StateProps>()((get) => ({
  videos: [
    { id: 1, title: "Haiykuu", imageSrc: "/Thumbs/Thumb1.webp" },
    { id: 2, title: "Naruto Clássico", imageSrc: "/Thumbs/Thumb2.webp" },
    { id: 3, title: "Bleach", imageSrc: "/Thumbs/Thumb3.jpg" },
    { id: 4, title: "Bakugan", imageSrc: "/Thumbs/Thumb4.jpg" },
  ],
}));
