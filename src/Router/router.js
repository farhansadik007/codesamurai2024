import express from "express";
import { addUser } from "../Controller/UserController.js";
import { addStaion } from "../Controller/StationController.js";
import { addTrain } from "../Controller/TrainController.js";
const Router = express.Router()

Router.post("/api/users",addUser);
Router.post("/api/trains", addTrain);
Router.post("/api/stations",addStaion);



export default Router