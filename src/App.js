import React from "react";
import "./App.css";
import Sidebar from './components/Sidebar'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const ScrollableSidebar = styled.div`
  height: 100%; 
  overflow-y: auto;
`;

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <div className="app__page">
              <ScrollableSidebar>
                <Sidebar />
              </ScrollableSidebar>
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
            </div>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;