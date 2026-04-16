const express = require("express");
const router = express.Router();
const { getImages, uploadImage } = require("../controllers/imageController");

router.get("/", getImages);
router.post("/upload", uploadImage);

module.exports = router;
