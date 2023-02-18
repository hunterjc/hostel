const express = require("express");
const mongoose = require("mongoose");
const { auth } = require("./auth");
const { Logger } = require("logger");
//
const app = express();
//port init
require("dotenv").config();
const port = process.env.PORT || 3000;
// const dburl = process.env.DBURL;

//mongoose configaration
// mongoose
//   .connect("mongodb://localhost:27017/hosteldb", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Mongodb connected ...");
//   })
//   .catch((err) => {
//     console.log("Mongodb failed to connect ...");
//     console.log(err);
//   });
require("./config");
// require(config);require(.config)

app.listen(port, () => {
  console.log("Express started on port 3000 ...");
});
// app.use(Logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const adminModel = require("./Models/admin");
const studentModel = require("./Models/student");

const adminFunction = require("./adminFunctionality");
const studentFunction = require("./studentFunctionality");

// route for admin create,login,view

//CREATE
app.post("/admin", adminFunction.createNewAdmin);
//LOGIN
app.post("/admin/login", adminFunction.login);
//VIEW
app.get("/admin/info", auth, adminFunction.hostelInfo);

//route for student

//CREATE
app.post("/student", studentFunction.createNewStudent);
//LOGIN
app.post("/student/login", studentFunction.login);
//VIEW INFO
app.get("/student", auth, studentFunction.info);
//UPDATE PRESENT OR FOODPREFARENCE
app.put("/student", auth, studentFunction.update);
