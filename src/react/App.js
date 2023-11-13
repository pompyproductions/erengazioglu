import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import pages
import Header from "./components/Header";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import OverlayMenu from "./components/OverlayMenu";

const App = () => {

  const [isNavMenuOpen, toggleNavMenu] = useState(false);

  function onMenuButtonPressed() {
    toggleNavMenu((state) => !state);
    console.log("click!");
  }
  function navMenuStateReport(s) {
    toggleNavMenu(s);
  }

  return <>
    {/* <React.StrictMode> */}
      <BrowserRouter>
        <Header callback={onMenuButtonPressed} />
        <Routes>
          <Route path="*" element={<HomePage />}/>
          <Route path="/projects" element={<ProjectsPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
        </Routes>
        <OverlayMenu title="Website under construction." isActive>
          <p>Last update: 13 Nov. 2023</p>
          <p>Next scheduled update: 17 Nov. 2023</p>
          <button onClick={() => window.location.href = "mailto:hello@erengazioglu.com"}>Send me an email</button>
        </OverlayMenu>
        <OverlayMenu title="Menu" isActive={isNavMenuOpen} stateReport={navMenuStateReport}>
          <Link to="contact">Projects</Link>
          <Link to="contact">About</Link>
          <Link to="contact">Contact</Link>
        </OverlayMenu>
      </BrowserRouter>
    {/* </React.StrictMode> */}
  </>
}

export default App;