import React from "react";
import { useParams } from "react-router-dom";

const ImageDetail = ({ images }) => {
  const { id } = useParams();
  const image = images.find((img) => img.id.toString() === id);

  if (!image) return <p>Image not found</p>;

  return (
    <div className="image-detail">
      <img src={image.url} alt={image.title} />
      <h2>{image.title}</h2>
      <p>{image.description || "No description available."}</p>
      <small>Uploaded: {new Date(image.uploadedAt).toLocaleString()}</small>
    </div>
  );
};

export default ImageDetail;
