// VideoList.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 불러오기
import './VideoList.css';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(''); // 수정된 부분
  const navigate = useNavigate(); // useNavigate 초기화

  useEffect(() => {
    // YouTube API Key
    const apiKey = 'AIzaSyBZ72Z_N_A6OUYjwX8GrIZk6C3tt2ampvg';
    // YouTube Data API 엔드포인트
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=검색어&key=${apiKey}`;

    // 비동기 함수로 데이터 가져오기
    const fetchVideos = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('API 요청이 실패했습니다.');
        }

        const data = await response.json();
        setVideos(data.items);
        // 초기 선택된 동영상 ID를 설정 (첫 번째 동영상의 ID로 설정)
        setSelectedVideoId(data.items[0]?.id.videoId || '');
      } catch (error) {
        console.error('에러 발생:', error.message);
      }
    };

    fetchVideos(); // 컴포넌트가 마운트될 때 한 번 호출

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 빈 배열을 두어 한 번만 호출되도록 함

  const handleVideoSelect = (videoId) => {
    setSelectedVideoId(videoId);
    // 동영상 선택 시 해당 동영상 페이지로 이동
    navigate(`/video/${videoId}`);
  };

  return (
    <div>
      <div className='video-list-container'>
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            onClick={() => handleVideoSelect(video.id.videoId)}
            className='video-item'>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className='video-thumbnail'
            />
            <div className='video-details'>
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.channelTitle}</p>
              <p>
                게시일:{' '}
                {new Date(video.snippet.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
