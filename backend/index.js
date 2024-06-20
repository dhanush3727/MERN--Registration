const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/empolyee");

// Create a server
app.listen(3001, () => {
  console.log("server is running");
});

// Creaate Schema
const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);

// DataBase side
app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json(user);
      } else {
        res.status(401).json(user);
      }
    } else {
      res.status(404).json(user);
    }
  });
});
