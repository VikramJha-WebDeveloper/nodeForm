const mongoose = require("mongoose");

const employeesSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const employeesModel = mongoose.model("employees", employeesSchema);

module.exports = employeesModel;