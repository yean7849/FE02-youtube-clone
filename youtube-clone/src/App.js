import './App.css';
import Buttons from './video page/Components/Buttons';
import Channel from './video page/Components/Channel';
import CommentContents from './video page/Components/CommentContents';
import Comments from './video page/Components/Comments';
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
          <Comments />
          <CommentContents />
        </div>
        <div className='list-side'>
          <RcmVideoList />
        </div>
      </main>
    </div>
  );
}

export default App;
