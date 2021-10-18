import Navbar from "./components/Navbar/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Navbar />
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
