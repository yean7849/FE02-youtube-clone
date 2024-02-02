import React from 'react';
import UserProfile from '../img/profile.jpg';
import '../css/MyPage.css';
import MyPageRow from '../components/MyPageRow';

import HistoryIcon from '@mui/icons-material/History';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';

const MyPage = ({ data }) => {
  return (
    <div className='mypage' id='profilewrap'>
      <div className='userInfo'>
        <img className='userImage' src={UserProfile} alt='프로필 이미지' />
        <div className='profile_info'>
          <span
            className='MyPage__name'
            style={{ fontSize: '30px', fontWeight: 'bold' }}>
            {data.name}
          </span>
          <div className='channelInfo'>
            <span style={{ fontSize: '15px' }}>{data.userChannelID}</span>
            <span>채널 보기</span>
          </div>
          <div
            className='accountAction'
            style={{ marginTop: '15px', marginLeft: '-10px' }}>
            <button>계정 전환</button>
            <button>Google 계정</button>
          </div>
        </div>
        <div className='myPageRow'>
          <MyPageRow title='기록' Icon={HistoryIcon} />
          <hr />
          <MyPageRow title='나중에 볼 동영상' Icon={WatchLaterOutlinedIcon} />
          <hr />
          <MyPageRow title='재생목록' Icon={QueueMusicOutlinedIcon} />
          <p>만들거나 저장한 재생목록이 여기에 표시됩니다.</p>
          <hr />
          <MyPageRow
            title='좋아요 표시한 동영상'
            Icon={ThumbUpAltOutlinedIcon}
          />
          <hr />
          <MyPageRow title='내 클립' Icon={ContentCutOutlinedIcon} />
          <p>
            마음에 드는 순간을 잘라서 공유해 보세요. 바로 여기에 목록이
            표시됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
