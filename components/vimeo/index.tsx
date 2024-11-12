"use client";

import { FC, useRef } from "react";

const HoverVideo: FC<{ videoId: string | number; provider: "vimeo" | "youtube" }> = ({ videoId, provider }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleMouseEnter = () => {
    if (iframeRef.current) {
      if (provider === "vimeo") {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({ method: "play" }),
          "*"
        );
      } else if (provider === "youtube") {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "playVideo" }),
          "*"
        );
      }
    }
  };

  const handleMouseLeave = () => {
    if (iframeRef.current) {
      if (provider === "vimeo") {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({ method: "pause" }),
          "*"
        );
      } else if (provider === "youtube") {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo" }),
          "*"
        );
      }
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "100%",
        paddingTop: "56.25%", // 16:9 Aspect Ratio
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <iframe
        ref={iframeRef}
        src={
          provider === "vimeo"
            ? `https://player.vimeo.com/video/${videoId}?background=1&loop=1&autoplay=0&muted=1`
            : `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0&loop=1&mute=1&controls=0&playlist=${videoId}`
        }
        allow="autoplay; fullscreen"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      ></iframe>
    </div>
  );
};

export default HoverVideo;
