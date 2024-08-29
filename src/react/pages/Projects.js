import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom"
import Image from "../components/Image";
import livranoSite from "../../assets/thumbnails/livrano-600.png";
import ProjectContent from "../components/ProjectContent";

const Projects = () => {
  return (
    <main>
      <h2>Projects</h2>
      <p>
        Below, you can find some of my personal projects.<br/><br/>
        Please note that <em>this page is still under development,</em> and that it's not an exhaustive list of my work.
      </p>
      <Card title="Livrano.com">
        <ProjectContent>
          {/* <img src={livranoSite} alt="Livrano.com displayed on a laptop." className="thumb"/> */}
          <p>
            A portfolio website for Livrano, a creative studio that specializes in graphic and editorial design.<br/><br/>
            Solo project consisting of: Design of the website, front-end code (written from scratch using React and Sass),
            domain and hosting setup (through Netlify).
          </p>
          <p>Date: 2022</p>
          <a href="https://livrano.com">Visit livrano.com</a>
        </ProjectContent>
      </Card>
      <Card title="AutoCAD Manual of Style">
        <ProjectContent>
          {/* <img src={livranoSite} alt="Livrano.com displayed on a laptop." className="thumb"/> */}
          <p>
            A Manual of Style for AutoCAD, written and developed by me as a reference guide. 
          </p>
          <p>Date: 2024 – Present</p>
          <a href="https://pompyproductions.github.io/autocad-reference/">Visit ACADMOS</a>
        </ProjectContent>
      </Card>


      <Card title="Studio Cutelo website">
        <p>
          A website for Studio Cutelo, an architecture studio based in Lisbon, Portugal.<br/><br/>
          Solo project consisting of: Design of the website, front-end code (written from scratch using React and Sass),
          domain and hosting setup (through Netlify).
        </p>
        <p>Date: 2023 – Present</p>
        <p>Status: Under development</p>
        <a href="https://studiocutelo.com">Visit studiocutelo.com</a>
      </Card>
    </main>
  )
}

export default Projects;