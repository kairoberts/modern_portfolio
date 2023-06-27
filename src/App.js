import React, { useState } from "react";
import "./style.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
// import AboutQuestions from "./components/AboutQuestion";
import Contact from "./components/Contact";
import WorkDetails from "./components/WorkDetails";
import Projects from "./components/Projects";
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
          <Route exact path="/" element={<Banner />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/projects"
            element={<Projects working={working} />}
          ></Route>
          <Route
            path="/projects/:id"
            element={<WorkDetails working={working} />}
          ></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route component={Error} element={<Error />} />
        </Routes>
      </div>
    </AlertState>
  );
}

export default App;
