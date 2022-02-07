//mport { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom' 
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import UserPage from './container/UserPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <UserPage />
          </Route>
          
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
