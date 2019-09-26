import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from "./components/navigationBar.js";
import HomePage from "./components/homepage.js";

function App() {
    return (
        <div>
          <NavigationBar/>
            <HomePage/>
        </div>
    )
  }
export default App;
