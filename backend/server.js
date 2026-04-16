const express = require("express");
const cors = require("cors");
const imageRoutes = require("./routes/images");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/images", imageRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
