const Image = require("../models/image");

exports.getImages = async (req, res) => {
  const images = await Image.findAll();
  res.json(images);
};

exports.uploadImage = async (req, res) => {
  try {
    console.log("File:", req.file);
    console.log("Body:", req.body);

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const fileUrl = `/uploads/${req.file.filename}`;
    const { title, description } = req.body;

    const newImage = await Image.create({ url: fileUrl, title, description });
    res.status(201).json(newImage);
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Upload failed", details: err.message });
  }
};
