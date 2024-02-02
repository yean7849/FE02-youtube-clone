import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from 'react-router-dom';
import SignIn from './components/SignIn';
import VideoList from './components/VideoList';
import SignUp from './components/SignUp';
import VideoPage from './video page/VideoPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import MyPage from './components/MyPage';
import fetchData from './axios/fetchData';

const ScrollableSidebar = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const mainVideo = {
  display: 'flex',
};

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Header />
              <div style={mainVideo}>
                <Sidebar />
                <VideoList />
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
              <VideoPage />
            </div>
          }
        />
        <Route
          path='/mypage'
          element={
            <div>
              <Header />
              <div style={mainVideo}>
                {' '}
                <ScrollableSidebar>
                  <Sidebar />
                </ScrollableSidebar>
                <MyPage data={data} />
              </div>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
