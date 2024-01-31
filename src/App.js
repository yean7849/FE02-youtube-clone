import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import VideoList from './components/VideoList';
import SignUp from './components/SignUp';
import VideoPage from './video page/VideoPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';

const ScrollableSidebar = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const mainVideo = {
  display: 'flex',
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Header />
              <div style={mainVideo}>
                <Sidebar /> <VideoList />
              </div>
            </div>
          }
        />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='/video/:videoId'
          element={
            <div>
              <Header />
              <VideoPage></VideoPage>
            </div>
          }
        />
        <Route
          path='/mypage'
          element={
            <div className='app__page'>
              <ScrollableSidebar>
                <Sidebar />
              </ScrollableSidebar>
            </div>
          }></Route>
      </Routes>
    </Router>
  );
};

export default App;
