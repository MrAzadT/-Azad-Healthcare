import Navbar from "./components/Navbar/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import OurService from "./components/OurService/OurService";
import FindADoctor from "./components/FindADoctor/FindADoctor";
import News from "./components/News/News";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/aboutUs">
          <AboutUs />
        </Route>
        <Route exact path="/ourService">
          <OurService />
        </Route>
        <Route exact exact path="findADoctor">
          <FindADoctor />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
