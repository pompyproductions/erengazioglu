import React from "react";
import duckImg from "../../assets/thumbnails/duck-sierratwo-serp.png"

const Image = (props) => {
  return (
    <div className="img-container">
      <img src={props.imgurl} alt={props.alt} />
    </div>
  )
}

Image.defaultProps = {
  imgurl: duckImg,
  alt: "Two ducks in a pond." 
}

export default Image;