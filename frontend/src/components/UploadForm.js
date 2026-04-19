import React, { useState } from "react";
import { uploadImage } from "../services/api";

const UploadForm = ({ onUpload }) => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newImage = await uploadImage({ url, title });
    onUpload(newImage);
    setUrl("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <input
        type="text"
        placeholder="Image URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
