import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import VideoList from './components/VideoList';
import SignUp from './components/SignUp';
import VideoPage from './video page/VideoPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Header /> <VideoList />
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
        />{' '}
      </Routes>
    </Router>
  );
};

export default App;
