import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

const HomeButton = () => {
  const youtubeLogoUrl =
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMTBfMTQ2%2FMDAxNjM2NTQ0ODA2ODU5.9RSSIFzlR38I5O9FtmCu8kVS6G8Hkap8z34fPan8qFIg.iAugJeNGWUrixuyxaOCKvEjcpTntrN83Wa7RZa3JAOwg.PNG.honghong0224%2Fimage.png&type=l340_165"; // 유튜브 로고 이미지 URL

  return (
    <Link to="/">
      <img
        src={youtubeLogoUrl}
        alt="YouTube Logo"
        style={{ marginTop: "-5px", width: "200px", height: "80px" }}
      />
    </Link>
  );
};

export default HomeButton;
