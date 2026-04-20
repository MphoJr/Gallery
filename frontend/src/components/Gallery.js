import React, { useEffect, useState } from "react";
import UploadForm from "../components/UploadForm";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);

  // fetch images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/images");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };
    fetchImages();
  }, []);

  // add new image after upload
  const handleUpload = (newImage) => {
    setImages((prev) => [...prev, newImage]);
  };

  return (
    <div>
      <h1>My Gallery</h1>
      <UploadForm onUpload={handleUpload} />

      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            {/* prepend backend URL so React can load the file */}
            <img
              src={`http://localhost:5000${image.url}`}
              alt={image.title}
              style={{ width: "200px", height: "auto" }}
            />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
