import React from 'react';

const Buttons = () => {
  return (
    <div>
      <div className='btn'>
        <div className='btn-likeUnlike'>
          <button className='btn-likeUnlike-like'>좋아요</button>
          <button className='btn-likeUnlike-unlike'>싫어요</button>
        </div>
        <div className='btn-share-box'>
          <button className='btn-share'>
            <img></img>공유
          </button>
        </div>
        <div className='btn-more-box'>
          <button className='btn-more'>・・・</button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
