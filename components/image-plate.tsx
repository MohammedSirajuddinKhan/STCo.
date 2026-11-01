import Image from "next/image";

type ImagePlateProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  soft?: boolean;
  deep?: boolean;
  quality?: number;
};

export function ImagePlate({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  soft = false,
  deep = false,
  quality = 75,
}: ImagePlateProps) {
  return (
    <div
      className={`plate ${soft ? "plate--soft" : ""} ${deep ? "plate--deep" : ""} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        className="object-cover"
      />
    </div>
  );
}
