import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RcmVideoList = () => {
  const [videoList, setVideoList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              q: 'kpop music',
              type: 'video',
              maxResults: 10,
              key: 'AIzaSyC_TPEOWmeacKWIE40BBAQdygMXzYzAcYc',
            },
          }
        );
        setVideoList(response.data.items);
      } catch (error) {
        console.error('Failed to fetch videos', error);
      }
    };

    fetchVideos();
  }, []);

  // 비디오 클릭 핸들러 함수
  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div>
      <div className='rcmVideo-list'>
        <div className='rcmVideo-list-filter'></div>
        {videoList.map((video) => (
          <div
            className='rcmVideo-list-wrapper'
            key={video.id.videoId}
            onClick={() => handleVideoClick(video.id.videoId)}
            style={{ cursor: 'pointer' }}>
            <div className='rcmVideo-list-thumbnail'>
              <img
                style={{ borderRadius: '0.3rem' }}
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
              />
            </div>
            <div className='rcmVideo-list-info-box'>
              <div className='rcmVideo-list-info-title'>
                {video.snippet.title}
              </div>
              <div className='rcmVideo-list-info-subinfo'>
                {video.snippet.channelTitle}
              </div>
              <div className='rcmVideo-list-info-subinfo'>
                {new Date(video.snippet.publishedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RcmVideoList;
