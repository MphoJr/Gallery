const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { getImages, uploadImage } = require("../controllers/imageController");

// GET all images
router.get("/", getImages);

// POST upload image file
router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;
