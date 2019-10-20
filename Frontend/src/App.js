import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from "./components/navigationBar.js";
import HomePage from "./components/homepage.js";
import CreatePage from "./components/createpage.js";
import UploadPage from "./components/uploadpage.js";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
    <Router>
          <NavigationBar/>
            <Route path="/home" component={HomePage}/>
            <Route path="/create" component={CreatePage}/>
            <Route path="/upload" component={UploadPage}/>
    </Router>
    )
  }
export default App;
