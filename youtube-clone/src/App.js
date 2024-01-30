import React from "react";
import "./App.css";
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
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