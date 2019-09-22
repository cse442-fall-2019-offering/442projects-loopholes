import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/navbar.js'
import NavigationBar from "./components/navbar";
import './components/searchbar.js'
import SearchBar from "./components/searchbar.js"

function App() {
  return (
      <div>
        <NavigationBar />
        <SearchBar/>
      </div>
  )
}

export default App;

