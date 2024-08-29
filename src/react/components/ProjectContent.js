import React from "react";

const ProjectContent = (props) => {

  return <div className="content">
    <div className="left">
      {props.children}
    </div>
    <div className="right">
      
    </div>
  </div>
}

ProjectContent.defaultProps = {
  
};

export default ProjectContent