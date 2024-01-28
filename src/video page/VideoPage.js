import React from 'react';
import Buttons from './Components/Buttons';
import Channel from './Components/Channel';
import CommentContents from './Components/CommentContents';
import Comments from './Components/Comments';
import Detail from './Components/Detail';
import RcmVideoList from './Components/RcmVideoList';
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
