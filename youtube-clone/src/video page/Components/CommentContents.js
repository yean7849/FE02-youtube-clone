import React from 'react';

const CommentContents = () => {
  return (
    <div>
      <div className='comment-contents'>
        <div className='comment-contents-box'>
          <div className='comment-contents-img'>이미지</div>
          <div>
            <div className='comment-contents-id-box'>
              <div className='comment-contents-id'>@user-11111111</div>
              <div className='comment-contents-date'>1일 전</div>
            </div>
            <div className='comment-contents-content'>덧글 내용</div>
            <div className='comment-contents-btn'>
              <button className='comment-contents-btn-like-unlike'>좋</button>
              <button className='comment-contents-btn-like-unlike'>싫</button>
              <button className='comment-contents-recomment'>답글</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentContents;
