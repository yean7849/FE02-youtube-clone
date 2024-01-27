import React, { useState } from "react";

import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [SignUpId, setSignUpId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [signupEmailValid, setSignupEmailValid] = useState(false);
  const [signupPwValid, setSignupPwValid] = useState(false);
  const [signupPwConfirmValid, setSignupPwConfirmValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const signupHandler = () => {
    if (signupEmailValid && signupPwValid && signupPwConfirmValid) {
      if (password === passwordConfirm) {
        alert("회원가입에 성공했습니다.");
        setSignUpId("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        setPasswordMatch(true);
        navigate("/");
      } else {
        setPasswordMatch(false);
      }
    }
  };

  const SignUpEmailHandler = (event) => {
    setEmail(event.target.value);
    const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    if (regex.test(event.target.value)) {
      setSignupEmailValid(true);
    } else {
      setSignupEmailValid(false);
    }
  };

  const SignUpPasswordHandler = (event) => {
    setPassword(event.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(event.target.value)) {
      setSignupPwValid(true);
    } else {
      setSignupPwValid(false);
    }
  };

  const SignUpPasswordConfirmHandler = (event) => {
    setPasswordConfirm(event.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(event.target.value)) {
      setSignupPwConfirmValid(true);
      if (event.target.value === password) {
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }
    } else {
      setSignupPwConfirmValid(false);
    }
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
        </div>

        <br />
        <div className="from-group">
          <input
            className="signup-email"
            type="text"
            placeholder="이메일"
            value={email}
            onChange={SignUpEmailHandler}
          />
        </div>
        <div className="signupErrorMessage">
          {!signupEmailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>
        <br />
        <div className="from-group">
          <input
            className="signup-password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={SignUpPasswordHandler}
          />
        </div>
        <div className="signupErrorMessage">
          {!signupPwValid && password.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력하세요.</div>
          )}
        </div>
        <br />
        <div className="from-group">
          <input
            className="signup-password-check"
            type="password"
            placeholder="비밀번호확인"
            value={passwordConfirm}
            onChange={SignUpPasswordConfirmHandler}
          />
        </div>
        <div className="signupErrorMessage">
          {!signupPwConfirmValid && passwordConfirm.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력하세요.</div>
          )}
          {!passwordMatch && <div>비밀번호가 일치하지 않습니다.</div>}
        </div>

        <br />
        <button className="signupSumbit" type="button" onClick={signupHandler}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUp;
