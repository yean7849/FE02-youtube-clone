import React from 'react';

const Video = () => {
  return (
    <div>
      <iframe
        className='video'
        style={{ borderRadius: '0.8rem' }}
        width='672'
        height='378'
        src='https://www.youtube.com/embed/baaNwRAhHBo?si=UYQTZfnXBF8XwJ0g'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    </div>
  );
};

export default Video;
