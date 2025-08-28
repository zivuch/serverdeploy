const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`run on ${PORT}`));

app.get("/test", (req, res) => {
  res.json({ msg: `hello from server, my name is ${process.env.NAME}` });
});


app.get("/", (req, res) => {
  res.send(`<h1>Welcome ${process.env.NAME}</h1>`);
});