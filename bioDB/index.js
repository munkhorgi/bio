import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import UrlRouter from "./router/url.js"


dotenv.config();
const url = process.env.MONGO_URL || "";
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/Url" , UrlRouter)
app.listen(port, async () => {
  connect();
  console.log(`Server running ${port}`);
});

const connect = () => {
  try {
    mongoose.connect(url, {}).then(() => {
      console.log("connect to DB");
    });
  } catch (error) {
    console.error("could not connnect to DB");
    process.exit(1);
  }
};
