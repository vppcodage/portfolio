import React from "react";

export const Download = ({
  width,
  height,
  fill = "currentColor",
}: {
  width?: string;
  height?: string;
  fill?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={fill}
      aria-label="Download icon"
    >
      <path d="M5 20h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2zM12 2a1 1 0 0 0-1 1v11.59L8.71 11.3a1 1 0 0 0-1.42 1.42l4 4a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42L13 14.59V3a1 1 0 0 0-1-1z" />
    </svg>
  );
};
