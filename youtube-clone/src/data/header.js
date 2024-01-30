import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { CiYoutube } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
  {
    title: "홈",
    icon: <GoHomeFill />,
    src: "/",
  },
  {
    title: "Shorts",
    icon: <SiYoutubeshorts />,
    src: "/today",
  },
  {
    title: "구독",
    icon: <MdOutlineSubscriptions />,
    src: "/developer",
  },
  {
    title: "YouTube Music",
    icon: <SiYoutubemusic />,
    src: "/webd",
  },
  {
    title: "나",
    icon: <CiYoutube />,
    src: "/website",
  },
];

export const snsLink = [
  {
    title: "github",
    url: "https://github.com/webstoryboy",
    icon: <AiFillGithub />,
  },
  {
    title: "youtube",
    url: "https://www.youtube.com/webstoryboy",
    icon: <AiFillYoutube />,
  },
  {
    title: "codepen",
    url: "https://codepen.io/webstoryboy",
    icon: <AiOutlineCodepen />,
  },
  {
    title: "instagram",
    url: "https://www.instagram.com/webstoryboy",
    icon: <AiOutlineInstagram />,
  },
];
