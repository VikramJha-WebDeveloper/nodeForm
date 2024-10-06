require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const employeesModel = require("./models/employees.js");

const port = process.env.PORT || 3000;
const databaseURL = process.env.DATABASE_URL;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

mongoose.connect(databaseURL).then(()=>{
    console.log("Connected Successfully...");
}).catch((err)=>{
    console.log(err);
});

app.post("/success", (req, res)=>{
    new employeesModel(req.body).save().then((data)=>{
        console.log("data", data);
        res.render("myWebsite");
    })
});

app.get("/", (req, res)=>{
    res.render("registrationForm");
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});