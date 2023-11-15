import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom"
import Image from "../components/Image";
import livranoSite from "../../assets/thumbnails/livrano-600.png";

const Projects = () => {
  return (
    <main>
      <Card title="This page is under development.">
        <p>Sorry for the inconvenience, check back soon!</p>
      </Card>
      <Link to="/"><button>&lt; Go back to the homepage</button></Link>
      <Image imgurl={livranoSite}/>
    </main>
  )
}

export default Projects;