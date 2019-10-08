import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from "./components/navigationBar.js";
import HomePage from "./components/homepage.js";
import ZoomIn from "./components/zoomin.js";

function App() {
    return (
        <div>
          <NavigationBar/>
            <HomePage/>
        <ZoomIn/>
        </div>
    )
  }
export default App;
