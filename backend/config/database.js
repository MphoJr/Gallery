const { Sequelize } = require("sequelize");

// Update these values with your actual database credentials
const sequelize = new Sequelize("gallerydb", "your_username", "your_password", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // set to true if you want SQL logs
});

module.exports = sequelize;
