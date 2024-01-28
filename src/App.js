import React from 'react';
import VideoPage from './video page/VideoPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/video/:videoId'
            element={<VideoPage></VideoPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
