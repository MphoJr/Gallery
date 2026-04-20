const express = require("express");
const cors = require("cors");
const imageRoutes = require("./routes/images");
const sequelize = require("./config/database");
const Image = require("./models/image");
const app = express();

sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Error syncing database:", err));
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/images", imageRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
