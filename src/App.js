import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPage from './video page/VideoPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/video/:videoId'
            element={<VideoPage></VideoPage>}></Route>
          <Route path='/' element={<home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
