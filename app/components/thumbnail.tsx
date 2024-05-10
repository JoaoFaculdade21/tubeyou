import Image from "next/image";

interface ThumbnailProps {
  imageSrc: string;
  title: string;
}

const Thumbnail = ({ imageSrc, title }: ThumbnailProps) => {
  return (
    <>
      <div className="overflow-hidden h-auto w-[100%] rounded cursor-pointer bg-cyan-700">
        <Image
          src={imageSrc}
          alt={title}
          width={0}
          height={0}
          className="w-full h-auto transition duration-300"
          sizes="100vw"
        />
        <h3>{title}</h3>
      </div>
    </>
  );
};

export default Thumbnail;
