const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Group D - Host a Docker Container with Amazon ECS");
});

app.get("/info", (req, res) => {
  res.send("Our Cbi Project");
});

app.listen(5000, () => {
  console.log("running at port 5000");
});