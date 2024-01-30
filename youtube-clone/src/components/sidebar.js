import React from "react";
import "../components/Sidebar.css";
import SidebarRow from "../components/SidebarRow";

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import HistoryIcon from "@mui/icons-material/History";
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagSharpIcon from '@mui/icons-material/OutlinedFlagSharp';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow title="홈" Icon={HomeIcon} />
      <SidebarRow title="Shorts" Icon={WhatshotIcon} />
      <SidebarRow title="구독" Icon={SubscriptionsOutlinedIcon} />
      <hr/>

      <h4>나 <span>&gt;</span></h4>
      <SidebarRow title="내 채널" Icon={AccountBoxOutlinedIcon} />
      <SidebarRow title="시청 기록" Icon={HistoryIcon} />
      <SidebarRow title="내 동영상" Icon={SmartDisplayOutlinedIcon} />
      <SidebarRow title="나중에 볼 동영상" Icon={WatchLaterOutlinedIcon} />
      <SidebarRow title="좋아요 표시한 동영상" Icon={ThumbUpAltOutlinedIcon} />
      <hr/>

      <h4>구독</h4>
      <SidebarRow title="더보기" Icon={ExpandMoreOutlinedIcon} />
      <hr/>

      <h4>탐색</h4>
      <SidebarRow title="인기 급상승" Icon={WhatshotOutlinedIcon} />
      <SidebarRow title="음악" Icon={MusicNoteOutlinedIcon} />
      <SidebarRow title="영화 및 TV" Icon={MovieCreationOutlinedIcon} />
      <SidebarRow title="실시간" Icon={SensorsOutlinedIcon} />
      <SidebarRow title="게임" Icon={SportsEsportsOutlinedIcon} />
      <SidebarRow title="뉴스" Icon={NewspaperOutlinedIcon} />
      <SidebarRow title="스포츠" Icon={EmojiEventsOutlinedIcon} />
      <SidebarRow title="학습" Icon={LightbulbOutlinedIcon} />
      <hr/>

      <h4>YouTube 더보기</h4>
      <SidebarRow title="YouTube Premium" Icon={YouTubeIcon} />
      <SidebarRow title="YouTube 스튜디오" Icon={YouTubeIcon} />
      <SidebarRow title="YouTube Music" Icon={YouTubeIcon} />
      <SidebarRow title="YouTube Kids" Icon={YouTubeIcon} />
      <hr/>

      <SidebarRow title="설정" Icon={SettingsOutlinedIcon} />
      <SidebarRow title="신고 기록" Icon={OutlinedFlagSharpIcon} />
      <SidebarRow title="고객센터" Icon={HelpOutlineOutlinedIcon} />
      <SidebarRow title="의견 보내기" Icon={AnnouncementOutlinedIcon} />
      <hr/>

      <p>&copy; 2024 Google LLC</p>
    </div>
  );
}

export default Sidebar;