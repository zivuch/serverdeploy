const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`run on ${PORT}`));

console.error("Name=>", process.env.NAME);

app.get("/api/test", (req, res) => {
  res.json({ msg: `hello from server, my name is ${process.env.NAME}` });
});

app.get("/api", (req, res) => {
  console.error("Get Request on line 18=>", process.env.NAME);
  res.send(`<h1>Welcome ${process.env.NAME}</h1>`);
});

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (rea, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});
