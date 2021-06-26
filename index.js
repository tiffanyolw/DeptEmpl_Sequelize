const express = require("express");
const app = express();
const config = require("./configurations/config");
const Department = require("./models/department");
const Employee = require("./models/employee");

const port = 3000;

Department.hasMany(Employee, {
    foreignKey: {
        allowNull: false
    },
    onDelete: "CASCADE"
});


config.authenticate().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

config.sync({force: false}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});