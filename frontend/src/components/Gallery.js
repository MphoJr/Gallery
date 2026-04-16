import React, { useEffect, useState } from "react";
import { fetchImages } from "../services/api";
import ImageCard from "./ImageCard";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages().then(setImages);
  }, []);

  return (
    <div className="gallery">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
};

export default Gallery;
