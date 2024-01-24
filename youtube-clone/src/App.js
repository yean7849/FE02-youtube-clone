import './App.css';
import Buttons from './video page/Components/Buttons';
import Channel from './video page/Components/Channel';
import Detail from './video page/Components/Detail';
import RcmVideoList from './video page/Components/RcmVideoList';
import Video from './video page/Components/Video';

function App() {
  return (
    <div className='App'>
      <main>
        <div className='video-side'>
          <Video />
          <div className='video-info'>
            <div className='title'>동영상 제목</div>
            <div className='video-info-bar'>
              <Channel />
              <Buttons />
            </div>
          </div>
          <Detail />
          <div className='comment'>
            <div className='comment-box'>
              <div className='comment-number'>댓글 20개</div>
              <div className='comment-filter'>정렬 기준</div>
            </div>
          </div>
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
        <div className='list-side'>
          <RcmVideoList />
        </div>
      </main>
    </div>
  );
}

export default App;
