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
  }
  function navMenuStateReport(s) {
    toggleNavMenu(s);
  }
  function closeNavMenu() {
    toggleNavMenu(false);
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
        <OverlayMenu title="Menu" isActive={isNavMenuOpen} stateReport={navMenuStateReport}>
          <Link to="home" onClick={closeNavMenu}>Home</Link>
          <Link to="projects" onClick={closeNavMenu}>Projects</Link>
          <Link to="contact" onClick={closeNavMenu}>Contact</Link>
        </OverlayMenu>
      </BrowserRouter>
    {/* </React.StrictMode> */}
  </>
}

export default App;