import React from 'react';

const RcmVideoList = () => {
  return (
    <div>
      <div className='rcmVideo-list'>
        <div className='rcmVideo-list-filter'>
          <button className='rcmVideo-list-filter-btn'>모두</button>
          <button className='rcmVideo-list-filter-btn'>관련 콘텐츠</button>
          <button className='rcmVideo-list-filter-btn'>
            최근에 업로드된 동영상
          </button>
          <button className='rcmVideo-list-filter-btn'>감상한 동영상</button>
        </div>
        <div className='rcmVideo-list-thumnail'>
          <img></img>
        </div>
        <div className='rcmVideo-list-info-box'>
          <div className='rcmVideo-list-info-title'>아이묭 플리 모음</div>
          <div className='rcmVideo-list-info-subinfo'>아이묭 다이스키</div>
          <div className='rcmVideo-list-info-subinfo'>
            조회수 328만회 ・ 1년 전
          </div>
        </div>
      </div>
    </div>
  );
};

export default RcmVideoList;
