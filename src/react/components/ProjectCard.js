import React from "react";
import Card from "./Card";
import { useState } from "react";

const ProjectCard = (props) => {

  const [isCollapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(state => !state)
  }

  return (
    <Card
      className="project double"
      title={props.title}
    >
      <button className="close" onClick={handleCollapse}>{isCollapsed ? "+" : "—"}</button>
      <img src={props.image} alt={props.imageAlt}></img>
      <div className="content">
        {props.children}
      </div>
    </Card>
  )
  
  
}

ProjectCard.defaultProps = {
  
};

export default ProjectCard