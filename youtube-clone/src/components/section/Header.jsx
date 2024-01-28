import React from "react";

import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { CiYoutube } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header id="header" role="banner">
      <h1 className="header__logo">
        <a href="/">
          <img
            src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20230225%2Fourlarge%2Fpngtree-youtube-icon-social-media-png-image_6618458.png&type=sc960_832"
            alt=""
          />
          <span>YouTube</span>
        </a>
      </h1>

      <nav className="header__menu">
        <ul classname="menu">
          <li classname="active">
            <a href="/">
              <GoHomeFill />홈
            </a>
          </li>
          <li>
            <a href="/today">
              <SiYoutubeshorts />
              Shorts
            </a>
          </li>
          <li>
            <a href="/developer">
              <MdOutlineSubscriptions />
              구독
            </a>
          </li>
          <li>
            <a href="/webd">
              <SiYoutubemusic />
              YouTube Music
            </a>
          </li>
          <li>
            <a href="/website">
              <CiYoutube />나
            </a>
          </li>
        </ul>
      </nav>

      <div className="header__sns">
        <ul>
          <li>
            <a href="https://github.com/webstoryboy" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/webstoryboy"
              rel="noopener noreferrer"
            >
              <AiFillYoutube />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/webstoryboy" rel="noopener noreferrer">
              <AiOutlineCodepen />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/webstoryboy"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
