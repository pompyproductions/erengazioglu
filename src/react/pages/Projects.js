import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom"
import Image from "../components/Image";
import livranoSite from "../../assets/thumbnails/LIVRANO-L.jpg";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
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
        <p>Date: 2022</p>
        <div className="card-buttons">
          <button href="https://livrano.com">Visit livrano.com</button>
        </div>
      </ProjectCard>
      <ProjectCard 
        title="AutoCAD Manual of Style"
        image={livranoSite}
        imageAlt="Livrano website on smartphone and laptop displays."
      >
        {/* <img src={livranoSite} alt="Livrano.com displayed on a laptop." className="thumb"/> */}
        <p>
          An online style guide and reference document for AutoCAD.
        </p>
        {/* <p>
          In form of a static website written, developed, and maintained by me (using Material for MKDocs).
        </p> */}
        <p>Date: 2024 – Present</p>
        <div className="card-buttons">
          <button href="https://pompyproductions.github.io/autocad-reference/">Visit ACADMOS</button>
        </div>
      </ProjectCard>


      <ProjectCard 
        title="Studio Cutelo website"
        image={livranoSite}
        imageAlt="Livrano website on smartphone and laptop displays."
      >
        <p>
          A website for Studio Cutelo, an architecture studio based in Lisbon, Portugal.
        </p>
        {/* <p>
          Solo project consisting of: Design of the website, front-end code (written from scratch using React and Sass),
          domain and hosting setup (through Netlify).
        </p> */}
        {/* <p>Date: 2023 – Present</p>
        <p>Status: Under development</p> */}
        <div className="card-buttons">
          <button href="https://studiocutelo.com">Visit studiocutelo.com</button>
        </div>
      </ProjectCard>
    </main>
  )
}

export default Projects;