import React, { useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import UploadForm from "../components/UploadForm";
import { fetchImages } from "../services/api";

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages().then(setImages);
  }, []);

  const handleUpload = (newImage) => {
    setImages((prev) => [...prev, newImage]);
  };

  return (
    <div className="home">
      <h1>My Gallery</h1>
      <UploadForm onUpload={handleUpload} />
      <Gallery images={images} />
    </div>
  );
};

export default Home;
