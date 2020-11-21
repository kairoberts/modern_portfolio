import React from "react";
import "./style.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
import AboutQuestions from "./components/AboutQuestion";
import Design from "./components/Design";
import Work from "./components/Work";
import Contact from "./components/Contact";
import WorkDetails from "./components/WorkDetails";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Banner />
          <About />
          <Design />
          <AboutQuestions />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact to="/work/:id">
          <WorkDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
