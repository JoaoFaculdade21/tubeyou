import Image from "next/image";

interface ThumbnailProps {
  imageSrc: string;
  title: string;
}

const Thumbnail = ({ imageSrc, title }: ThumbnailProps) => {
  return (
    <>
      <div className="overflow-hidden h-[60vw] max-h-[200px] w-[70vw] max-w-[300px] rounded cursor-pointer bg-cyan-700">
        <Image
          src={imageSrc}
          alt={title}
          width={0}
          height={0}
          className="w-[100%] h-[80%] hover:scale-105 hover:blur-sm transition duration-300"
          sizes="100vw"
        />
        <h3 className="text-white font-bold text-center">{title}</h3>
      </div>
    </>
  );
};

export default Thumbnail;
