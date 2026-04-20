const Image = require("../models/Image");

exports.getImages = async (req, res) => {
  const images = await Image.findAll();
  res.json(images);
};

exports.uploadImage = async (req, res) => {
  try {
    const fileUrl = `/uploads/${req.file.filename}`;
    const { title, description } = req.body;

    const newImage = await Image.create({
      url: fileUrl,
      title,
      description,
    });

    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ error: "Upload failed", details: err.message });
  }
};
