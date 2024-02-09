import express from "express";
import { addUser } from "../Controller/UserController.js";
import { addStaion,getAllStation } from "../Controller/StationController.js";
const Router = express.Router()
Router.post("/api/users",addUser);
Router.post("/api/stations",addStaion)
Router.get("/api/stations",getAllStation);



export default Router