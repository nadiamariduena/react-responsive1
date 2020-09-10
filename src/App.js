import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch />
      <Route path="/" exact />
    </Router>
  );
}

export default App;

/*

    <Route path="/" exact />  is the HOME PAGE
 */
