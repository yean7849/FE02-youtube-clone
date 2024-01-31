import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RcmVideoList = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          relatedToVideoId: '7ghhRHRP6t4',
          part: 'id,snippet',
          type: 'video',
          maxResults: '50',
        },
        headers: {
          'X-RapidAPI-Key':
            '124beff6fcmsh4aacf917256fd61p13baa9jsneffb301e16ac',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setVideoList(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='rcmVideo-list'>
        <div className='rcmVideo-list-filter'></div>
        {videoList.map((video) => (
          <div className='rcmVideo-list-wrapper' key={video.id.videoId}>
            <div className='rcmVideo-list-thumnail'>
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
                조회수 {video.statistics.viewCount} ・{' '}
                {video.snippet.publishedAt}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RcmVideoList;
