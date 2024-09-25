import NextImage from "next/image";

interface ImageProps {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Image: React.FC<ImageProps> = ({
  className,
  src,
  alt,
  width,
  height,
}) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      layout="responsive"
    />
  );
};

export default Image;
