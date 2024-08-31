import React from "react";
import Card from "./Card";
import { useState } from "react";

const ProjectCard = (props) => {

  const { isCollapsed, setCollapsed } = useState(false);

  const handleCollapse = () => {
    setCollapsed(state => !state)
  }

  return (
    <Card
      className="project"
      title={props.title}
      
    >
      <button className="close">{isCollapsed ? "+" : "—"}</button>
      <div className="content">
        {props.children}
      </div>
    </Card>
  )
  
  
}

ProjectCard.defaultProps = {
  
};

export default ProjectCard