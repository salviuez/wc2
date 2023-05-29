//import express from "express";
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const port = 8000;

// app.get("/", function (request, response) {
//     response.send("Hi , Iam new server")
// });

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => console.log(`server starts in ${port}`));
