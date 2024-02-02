// Video.js

import React from "react";

const Video = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <iframe
        width="470" // 원하는 가로 크기
        height="265" // 원하는 세로 크기
        src={videoUrl}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
