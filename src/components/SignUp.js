<<<<<<< HEAD
import React, { useState } from 'react';

import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import YouTube from '../img/YouTube.png';
=======
import React, { useState } from "react";

import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import YouTube from "../img/YouTube.png";
>>>>>>> develop

const SignUp = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const [SignUpId, setSignUpId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
=======
  const [SignUpId, setSignUpId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
>>>>>>> develop
  const [signupEmailValid, setSignupEmailValid] = useState(false);
  const [signupPwValid, setSignupPwValid] = useState(false);
  const [signupPwConfirmValid, setSignupPwConfirmValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const signupHandler = () => {
    if (signupEmailValid && signupPwValid && signupPwConfirmValid) {
      if (password === passwordConfirm) {
<<<<<<< HEAD
        alert('회원가입에 성공했습니다.');
        setSignUpId('');
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
        setPasswordMatch(true);
        navigate('/signin');
=======
        alert("회원가입에 성공했습니다.");
        setSignUpId("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        setPasswordMatch(true);
        navigate("/signin");
>>>>>>> develop
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
<<<<<<< HEAD
    <div className='signup-container'>
      <div className='signup-box'>
        <div className='signup-title-logo'>
          <img src={YouTube} alt='youtube' />

          <div className='signup-header'>회원가입</div>
          <div className='from-group'>
            <input
              className='signup-Id'
              type='text'
              placeholder='아이디'
=======
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-title-logo">
          <img src={YouTube} alt="youtube" />

          <div className="signup-header">회원가입</div>
          <div className="from-group">
            <input
              className="signup-Id"
              type="text"
              placeholder="아이디"
>>>>>>> develop
              value={SignUpId}
              onChange={(event) => setSignUpId(event.target.value)}
            />
          </div>

          <br />
<<<<<<< HEAD
          <div className='from-group'>
            <input
              className='signup-email'
              type='text'
              placeholder='이메일'
=======
          <div className="from-group">
            <input
              className="signup-email"
              type="text"
              placeholder="이메일"
>>>>>>> develop
              value={email}
              onChange={SignUpEmailHandler}
            />
          </div>
<<<<<<< HEAD
          <div className='signupErrorMessage'>
=======
          <div className="signupErrorMessage">
>>>>>>> develop
            {!signupEmailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>
          <br />
<<<<<<< HEAD
          <div className='from-group'>
            <input
              className='signup-password'
              type='password'
              placeholder='비밀번호'
=======
          <div className="from-group">
            <input
              className="signup-password"
              type="password"
              placeholder="비밀번호"
>>>>>>> develop
              value={password}
              onChange={SignUpPasswordHandler}
            />
          </div>
<<<<<<< HEAD
          <div className='signupErrorMessage'>
=======
          <div className="signupErrorMessage">
>>>>>>> develop
            {!signupPwValid && password.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력하세요.</div>
            )}
          </div>
          <br />
<<<<<<< HEAD
          <div className='from-group'>
            <input
              className='signup-password-check'
              type='password'
              placeholder='비밀번호확인'
=======
          <div className="from-group">
            <input
              className="signup-password-check"
              type="password"
              placeholder="비밀번호확인"
>>>>>>> develop
              value={passwordConfirm}
              onChange={SignUpPasswordConfirmHandler}
            />
          </div>
<<<<<<< HEAD
          <div className='signupErrorMessage'>
=======
          <div className="signupErrorMessage">
>>>>>>> develop
            {!signupPwConfirmValid && passwordConfirm.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력하세요.</div>
            )}
            {!passwordMatch && <div>비밀번호가 일치하지 않습니다.</div>}
          </div>

          <br />
          <button
<<<<<<< HEAD
            className='signupSumbit'
            type='button'
            onClick={signupHandler}>
            회원가입
          </button>
          <br />
          <div className='login-movie'>
            <span className='login-page-move'>이미 가입을 하셨나요? </span>
            <button
              className='login-page'
              onClick={() => navigate('/signin')}
              type='button'>
=======
            className="signupSumbit"
            type="button"
            onClick={signupHandler}
          >
            회원가입
          </button>
          <br />
          <div className="login-movie">
            <span className="login-page-move">이미 가입을 하셨나요? </span>
            <button
              className="login-page"
              onClick={() => navigate("/signin")}
              type="button"
            >
>>>>>>> develop
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
