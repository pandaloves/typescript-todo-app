interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ className, src, alt }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Image;
