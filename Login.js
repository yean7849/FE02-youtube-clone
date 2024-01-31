import React from "react";
import "./main.css";

const handleLoginClick = () => {
  // 로그인 버튼이 눌렸을 때 수행할 동작 추가
  console.log("Login button clicked!");
};

const Login = () => {
  return (
    <button className="login-button" onClick={handleLoginClick}>
      <img
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTlfMjY3%2FMDAxNjkyMzk0MDA3MDYw.VMRXDa6JvAAdpHi0_eSapoc_KY8fbxk6UHasqRf1CRsg.6cz2_syJc7Arr2p49--79OBcUEq7dvg1vgASwipH9jwg.PNG.jjungaang%2Fpfp%25A3%25DFsalmonorange%25A3%25DFuzubaong.png&type=sc960_832"
        alt="Login"
        className="login-image"
      />
    </button>
  );
};

export default Login;
