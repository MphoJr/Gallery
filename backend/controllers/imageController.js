const images = []; // temporary in-memory store

exports.getImages = (req, res) => {
  res.json(images);
};

exports.uploadImage = (req, res) => {
  const { url, title } = req.body;
  const newImage = { id: Date.now(), url, title };
  images.push(newImage);
  res.status(201).json(newImage);
};
