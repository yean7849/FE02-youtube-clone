import React from 'react';
import Video from './Components/Video';
import './VideoPage.css';

const VideoPage = () => {
  return (
    <div>
      <main>
        <div className='video-side'>
          <Video />
        </div>
      </main>
    </div>
  );
};

export default VideoPage;
