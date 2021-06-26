const Sequelize = require("sequelize");
const config = new Sequelize("company1", "user", "", {dialect: "mysql"});

module.exports = config;