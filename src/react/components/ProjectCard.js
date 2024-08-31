import React from "react";
import Card from "./Card";

const ProjectCard = (props) => {

  return (
    <Card
      className="project"
      title={props.title}
      
    >
      <div className="content">
        <div className="left">
          {props.children}
        </div>
        <div className="right">
          
        </div>
      </div>
    </Card>
  )
  
  
}

ProjectCard.defaultProps = {
  
};

export default ProjectCard