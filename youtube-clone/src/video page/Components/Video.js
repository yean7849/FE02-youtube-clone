import React, { useEffect, useState } from 'react';
import { fetchFromAPI } from '../fetchFromAPI';
import { useParams } from 'react-router-dom';
import Channel from './Channel';
import Buttons from './Buttons';
import Detail from './Detail';
import Comments from './Comments';
import CommentContents from './CommentContents';
import RcmVideoList from './RcmVideoList';

const Video = () => {
  const { videoId } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then(
      (data) => {
        console.log(data);
        setVideoDetail(data.items[0]);
      }
    );
  }, [videoId]);

  return (
    <div>
      <div>
        <iframe
          className='video'
          style={{ borderRadius: '0.8rem' }}
          width='672'
          height='378'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen></iframe>
        <div className='video-info'>
          <div className='title'>{videoId}</div>
          <div className='video-info-bar'>
            <Channel videoId={videoId} />
            <Buttons videoId={videoId} />
          </div>
        </div>
        <Detail videoId={videoId} />
        <Comments videoId={videoId} />
        <CommentContents videoId={videoId} />
      </div>
      <div className='list-side'>
        <RcmVideoList videoId={videoId} />
      </div>
    </div>
  );
};

export default Video;
