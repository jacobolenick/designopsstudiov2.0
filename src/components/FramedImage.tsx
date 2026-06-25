type FramedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  fill?: boolean;
  objectFit?: "cover" | "contain";
  className?: string;
};

export function FramedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  fill = false,
  objectFit = "cover",
  className = "",
}: FramedImageProps) {
  return (
    <div
      className={`framed-image-outer ${fill ? "framed-image-outer--fill" : ""} ${className}`}
    >
      <div className={`framed-image-inner ${fill ? "framed-image-inner--fill" : "framed-image-inner--hug"}`}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`framed-image-img ${fill && objectFit === "contain" ? "framed-image-img--contain" : ""}`}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          draggable={false}
        />
      </div>
    </div>
  );
}
