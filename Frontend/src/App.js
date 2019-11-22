import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from "./components/navigationBar.js";
import HomePage from "./components/homepage.js";
import CreatePage from "./components/createpage.js";
import UploadPage from "./components/uploadpage.js";
import TemplateGenerator from "./components/templateGenerator.js";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
    return (
    <Router>
          <NavigationBar/>
            <Route path="/CSE442-542/2019-Fall/cse-442i/home" component={HomePage}/>
            <Route path="/CSE442-542/2019-Fall/cse-442i/create" component={CreatePage}/>
            <Route path="/CSE442-542/2019-Fall/cse-442i/upload" component={UploadPage}/>
            <Route path="/CSE442-542/2019-Fall/cse-442i/template" component={TemplateGenerator}/>
    </Router>
    )
  }
export default App;
