import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom"
import Image from "../components/Image";
import livranoSite from "../../assets/thumbnails/livrano-600.png";

const Projects = () => {
  return (
    <main>
      <h2>Projects</h2>
      <p>
        Below, you can find some of the personal projects that I've been working on.<br/><br/>
        Please note that <em>this page is still under development,</em> and that it's not an exhaustive list of my work.
      </p>
      <Card title="Livrano.com">
        <img src={livranoSite} alt="Livrano.com displayed on a laptop." className="thumb"/>
        <p>
          A portfolio website for Livrano, a creative studio that specializes in graphic and editorial design.<br/><br/>
          Solo project consisting of: Design of the website, Front-end code (written from scratch using React and Sass),
          Setting up the domain and hosting (through Netlify).
        </p>
        <p>Date: 2022</p>
        <a href="https://livrano.com">Visit livrano.com</a>
      </Card>


      <Card title="This page is under development.">
        <p>Sorry for the inconvenience, check back soon!</p>
      </Card>
      <Link to="/"><button>&lt; Go back to the homepage</button></Link>
      {/* <div className="thumbnail-grid">
        <Image imgurl={livranoSite}/>
        <Image imgurl={livranoSite}/>
        <Image imgurl={livranoSite}/>
        <Image imgurl={livranoSite}/>
        <Image imgurl={livranoSite}/>
      </div> */}
    </main>
  )
}

export default Projects;