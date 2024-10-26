import React from "react";

const Image = ({
  width = 500,
  height = "auto",
  src,
  alt,
  center = false,
}: {
  alt: string;
  width: number;
  height: number | "auto";
  src: string;
  center?: boolean;
}) => {
  return (
    <div style={{ display: center ? "flex" : "block", justifyContent: center ? "center" : "initial" }}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height !== "auto" ? height : undefined}
        style={{ height: height === "auto" ? "auto" : `${height}px` }}
      />
    </div>
  );
};

export default Image;
