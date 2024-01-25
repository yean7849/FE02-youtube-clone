import React, { useEffect, useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [SignUpId, setSignUpId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const emailInputChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">회원가입</div>
        <div className="from-group">
          <input
            className="signup-Id"
            type="text"
            placeholder="아이디"
            value={SignUpId}
            onChange={(event) => setSignUpId(event.target.value)}
          />
          <br />
          <input
            className="signup-email"
            type="text"
            placeholder="이메일"
            value={email}
            onChange={emailInputChange}
          />
          <br />
          <input
            className="signup-password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <input
            className="signup-password-check"
            type="password"
            placeholder="비밀번호확인"
            value={passwordConfirm}
            onChange={(event) => setPasswordConfirm(event.target.value)}
          />
        </div>
        <br />
        <button className="signupSumbit" type="button">
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUp;
