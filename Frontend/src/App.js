import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import routes from "./routes.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";

function App() {
  return <Router>{renderRoutes(routes)}</Router>;
}

export default App;
