import React from "react";
import useProgressiveImage from "@ohs/use-progressive-image";

export function Image({ src, loader, ...props }) {
  const [loading] = useProgressiveImage({
    img: src,
    ssr: false,
  });

  return <img src={loading ? loader : src} {...props} />;
}
