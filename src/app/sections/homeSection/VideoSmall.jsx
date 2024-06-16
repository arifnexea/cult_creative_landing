const VideoSmall = ({ src }) => {
  return (
    <div>
      <video
        src={src}
        className="h-[37rem] rounded-lg"
        autoPlay
        loop
        muted
        webkit-playsinline="true"
        playsInline
        preload="metadata"
      >
        <source type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoSmall;
