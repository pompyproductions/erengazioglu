import React from "react";


const Image = (props) => {
  return (
    <div className="img-container">
      <img src={props.imgurl} alt={props.alt} />
    </div>
  )
}

Image.defaultProps = {

}

export default Image;