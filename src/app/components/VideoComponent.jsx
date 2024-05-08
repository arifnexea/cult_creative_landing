// VideoComponent.js

import { useEffect, useRef } from "react";

const VideoComponent = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.1, // 10% visibility required to trigger loading
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start loading the video when it becomes visible
          videoRef.current.load();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Start observing the video element
    observer.observe(videoRef.current);

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      className="w-[50%] 2xl:h-[70vh] xl:[h-40vh] rounded-md object-cover"
      autoPlay
      loop
      muted
      webkit-playsInline
      playsInline
      preload="metadata"
      ref={videoRef}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
