import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <main>
      <Card title="This page is under development.">
        <p>Sorry for the inconvenience, check back soon!</p>
      </Card>
      <Link to="/"><button>&lt; Go back to the homepage</button></Link>
    </main>
  )
}

export default Projects;