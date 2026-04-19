import React from "react";

const ImageCard = ({ image }) => (
  <div className="image-card">
    <img src={image.url} alt={image.title} />
    <p>{image.title}</p>
  </div>
);

export default ImageCard;
