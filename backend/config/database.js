const { Sequelize } = require("sequelize");

// Update these values with your actual database credentials
const sequelize = new Sequelize("gallerydb", "postgres", "Mphojr@123", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // set to true if you want SQL logs
});

module.exports = sequelize;
