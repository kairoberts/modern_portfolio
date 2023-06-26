import React, { useState } from "react";
import "./style.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
// import AboutQuestions from "./components/AboutQuestion";
import Contact from "./components/Contact";
import WorkDetails from "./components/WorkDetails";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Route, Routes } from "react-router-dom";
import { WorkState } from "./WorkState";
import MobileMenu from "./components/MobileMenu";
import AlertState from "./context/AlertState";

function App() {
  const [working] = useState(WorkState);

  return (
    <AlertState>
      <div className="App">
        <Nav />
        <MobileMenu />
        <Routes>
          <Route exact path="/">
            <Banner />
            {/* <AboutQuestions /> */}
            {/* <Footer /> */}
          </Route>
          <Route exact path="/about">
            <About />
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
            <Footer />
          </Route>
          <Route component={Error} />
          <Footer />
        </Routes>
      </div>
    </AlertState>
  );
}

export default App;
