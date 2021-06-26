const Sequelize = require("sequelize");
const config = require("./../configurations/config");

const Department = config.define("Department", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    department_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps:false});

module.exports = Department;