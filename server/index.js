import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import DefaultData from "./default.js";

dotenv.config();

const app = express();

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;

Connection({ username, password });

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});

//default data in db
DefaultData();
