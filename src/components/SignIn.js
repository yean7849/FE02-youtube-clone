import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remembeId, setRememberId] = useState(false);

  const loginHandler = () => {
    //로그인 로직 구현
  };

  const signupHandler = () => {
    //회원가입 로직 구현
  };

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
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <br />
        <input
          className="login-password"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="remember-id">
          <input
            type="checkbox"
            value={remembeId}
            onChange={() => setRememberId(!remembeId)}
          />
          아이디저장
        </div>
        <button className="loginSumbit" onClick={loginHandler} type="button">
          로그인
        </button>
        <br />
        <button className="signup-in" onClick={signupHandler} type="button">
          회원가입
        </button>
        <span> 아이디 찾기</span>
        <span> 비밀번호 찾기</span>
      </div>
    </div>
  );
};

export default SignIn;
