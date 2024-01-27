import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import google from "../img/google.png";
import kakao from "../img/kakao.png";
import naver from "../img/naver.png";

const User = {
  email: "test@test.com",
  password: "@test12345",
};

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notNext, setNotNext] = useState(false);

  const loginHandler = () => {
    if (email === User.email && password === User.password) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
    setEmail("");
    setPassword("");
    setNotNext(true);
  };

  const LoginEmailHandler = (event) => {
    setEmail(event.target.value);
    const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    if (regex.test(event.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const LoginPasswordHandler = (event) => {
    setPassword(event.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(event.target.value)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  useEffect(() => {
    setNotNext(!(emailValid && passwordValid));
  }, [emailValid, passwordValid]);

  return (
    <div className="container">
      <div className="login-box">
        <div className="login-header">로그인</div>
        <div className="from-group">
          <input
            className="login-email"
            type="text"
            placeholder="이메일"
            value={email}
            onChange={LoginEmailHandler}
          />
        </div>
        <div className="errorMessageWrap">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>
        <br />
        <div className="from-group">
          <input
            className="login-password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={LoginPasswordHandler}
          />
        </div>
        <div className="errorMessageWrap">
          {!passwordValid && password.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력하세요.</div>
          )}
        </div>
        <div className="remember-id">
          <input type="checkbox" />
          아이디 저장
        </div>
        <button
          className="loginSumbit"
          disabled={notNext}
          onClick={loginHandler}
        >
          로그인
        </button>
        <br />

        <button
          className="signup-in"
          onClick={() => navigate("/signup")}
          type="button"
        >
          회원가입
        </button>
        <span> 아이디 찾기</span>
        <span> 비밀번호 찾기</span>
        <div className="line">다른 계정으로 로그인</div>
        <div className="social-login-iocons">
          <img src={google} alt="Google" />
          <img src={kakao} alt="Kakao" />
          <img src={naver} alt="Facebook" />
        </div>
      </div>
    </div>
  );
}
