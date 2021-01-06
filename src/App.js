import React, { useState } from "react";
import "./style.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
import AboutQuestions from "./components/AboutQuestion";
import Design from "./components/Design";
import Contact from "./components/Contact";
import WorkDetails from "./components/WorkDetails";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Switch, Route } from "react-router-dom";
import { WorkState } from "./WorkState";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [working] = useState(WorkState);

  return (
    <div className="App">
      <Nav />
      <MobileMenu />
      <Switch>
        <Route exact path="/">
          <Banner />
          <About />
          <Design />
          <AboutQuestions />
          <Footer />
        </Route>
        <Route exact path="/projects">
          <Projects working={working} />
          <Footer />
        </Route>
        <Route path="/projects/:id">
          <WorkDetails working={working} />
          <Footer />
        </Route>
        <Route exact path="/contact">
          <Contact />
          {/* <Footer /> */}
        </Route>
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
