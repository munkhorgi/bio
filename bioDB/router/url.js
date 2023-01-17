import express from "express";
import {
  getAllUrl,
  createUrl,
  deleteUrl,
  findUrl,
} from "../controller/url.js";



const UrlRouter = express.Router();





UrlRouter.route("/").all(myFirstMiddleWare).get(getAllUrl).post(createUrl);
UrlRouter.route("/:id").get(findUrl).delete(deleteUrl);

export default UrlRouter;
