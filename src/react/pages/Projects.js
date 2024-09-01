import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom"
import ProjectCard from "../components/ProjectCard";

// image imports
import livranoSite from "../../assets/thumbnails/LIVRANO-L.jpg";
import oncaSite from "../../assets/thumbnails/ONCA-L.jpg";
import acadmos from "../../assets/thumbnails/ACADMOS-L.jpg";
import cuteloSite from "../../assets/thumbnails/CUTELO-L.jpg";

const Projects = () => {

  const handleLink = (e) => {
    window.open(e.target.getAttribute("href"), "_blank")
  }

  return (
    <main>
      <h2>Projects</h2>
      <p>
        Below, you can find some of my personal projects.<br/><br/>
        Please note that <em>this page is still under development,</em> and that it's not an exhaustive list of my work.
      </p>
      <ProjectCard 
        title="Livrano.com" 
        image={livranoSite}
        imageAlt="Livrano website on smartphone and laptop displays."
      >
        <p>
          A portfolio website for Livrano, a creative studio that specializes in graphic and editorial design.
        </p>
        {/* <p>
          Solo project consisting of: Design of the website, front-end code (written from scratch using React and Sass),
          domain and hosting setup (through Netlify).
        </p> */}
        {/* <p>Date: 2022</p> */}
        <p>Status: Online</p>
        <div className="card-buttons">
          <button href="https://livrano.com" onClick={handleLink}>Visit livrano.com</button>
        </div>
      </ProjectCard>
      <ProjectCard 
        title="ONCA Development website"
        image={oncaSite}
        imageAlt="ONCA Development website on a laptop display."
      >
        {/* <img src={livranoSite} alt="Livrano.com displayed on a laptop." className="thumb"/> */}
        <p>
          An online style guide and reference document for AutoCAD.
        </p>
        {/* <p>
          In form of a static website written, developed, and maintained by me (using Material for MKDocs).
        </p> */}
        {/* <p>Date: 2024 – Present</p> */}
        <p>Status: Online (continuous development)</p>
        <div className="card-buttons">
          <button href="https://oncadevelopment.com" onClick={handleLink}>Visit ONCA</button>
        </div>
      </ProjectCard>
      <ProjectCard 
        title="AutoCAD Manual of Style"
        image={acadmos}
        imageAlt="ACADMOS displayed on stacked laptops."
      >
        {/* <img src={livranoSite} alt="Livrano.com displayed on a laptop." className="thumb"/> */}
        <p>
          An online style guide and reference document for AutoCAD.
        </p>
        {/* <p>
          In form of a static website written, developed, and maintained by me (using Material for MKDocs).
        </p> */}
        {/* <p>Date: 2024 – Present</p> */}
        <p>Status: Online (continuous development)</p>
        <div className="card-buttons">
          <button href="https://pompyproductions.github.io/autocad-reference/" onClick={handleLink}>Visit ACADMOS</button>
        </div>
      </ProjectCard>


      <ProjectCard 
        title="Studio Cutelo website"
        image={cuteloSite}
        imageAlt="Livrano website on smartphone and laptop displays."
      >
        <p>
          A website for Studio Cutelo, an architecture studio based in Lisbon, Portugal.
        </p>
        {/* <p>
          Solo project consisting of: Design of the website, front-end code (written from scratch using React and Sass),
          domain and hosting setup (through Netlify).
        </p> */}
        {/* <p>Date: 2023 – Present</p> */}
        <p>Status: Online (under construction)</p>
        <div className="card-buttons">
          <button href="https://studiocutelo.com" onClick={handleLink}>Visit studiocutelo.com</button>
        </div>
      </ProjectCard>
    </main>
  )
}

export default Projects;