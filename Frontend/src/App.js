import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from "./components/navigationBar.js";
import HomePage from "./components/homepage.js";
import CreatePage from "./components/createpage.js";
import UploadPage from "./components/uploadpage.js";
import Routes from "./routes.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { renderRoutes } from "react-router-config";

function App() {
    return (
    <Router>
          <NavigationBar/>
            /*<Route path="/CSE442-542/2019-Fall/cse-442i/home" component={HomePage}/>
            <Route path="/CSE442-542/2019-Fall/cse-442i/create" component={CreatePage}/>
            <Route path="/CSE442-542/2019-Fall/cse-442i/upload" component={UploadPage}/>*/
            {renderRoutes(Routes)}
    </Router>
    )
  }
export default App;
