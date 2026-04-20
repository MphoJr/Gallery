import React, { useState } from "react";

const UploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("image", file); // must match upload.single("image") in backend
    formData.append("title", title);

    try {
      const res = await fetch("http://localhost:5000/api/images/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const newImage = await res.json();
      onUpload(newImage);

      // reset form
      setFile(null);
      setTitle("");
    } catch (err) {
      console.error(err);
      alert("Error uploading image");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
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
