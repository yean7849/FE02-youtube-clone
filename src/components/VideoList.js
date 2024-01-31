import React, { useState } from "react";
import Video from "./Video"; // Video 컴포넌트 import

const VideoList = () => {
  const [selectedVideoId, setSelectedVideoId] = useState("VIDEO_ID_1"); // 초기 동영상 ID

  const handleVideoSelect = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
    <div>
      <Video videoId={selectedVideoId} />
      <ul>
        <li onClick={() => handleVideoSelect("VIDEO_ID_1")}>Video 1</li>
        <li onClick={() => handleVideoSelect("VIDEO_ID_2")}>Video 2</li>
        {/* 추가적인 동영상 목록 */}
      </ul>
    </div>
  );
};

export default VideoList;
