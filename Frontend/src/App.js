import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from "./components/navigationBar.js";
import HomePage from "./components/homepage.js";
import CreatePage from "./components/createpage.js";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
    <Router>
      <div>
          <NavigationBar/>
            <Route path="/home" component={HomePage}/>
            <Route path="/create" component={CreatePage}/>
      </div>
    </Router>
    )
  }
export default App;
