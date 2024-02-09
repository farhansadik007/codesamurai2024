import express from "express";
import { addUser } from "../Controller/UserController.js";
import { addTrain, listTrain } from "../Controller/TrainController.js";
import { addStaion, getAllStation } from "../Controller/StationController.js";
import { addBalance, getWallet } from "../Controller/walletController.js";

const Router = express.Router()

Router.post("/api/users", addUser);
Router.post("/api/trains", addTrain);
Router.get('/api/stations/:stationId/trains', listTrain);

Router.post("/api/users", addUser);
Router.post("/api/stations", addStaion)
Router.get("/api/stations", getAllStation);
Router.get("/api/wallets/:id", getWallet);
Router.put("/api/wallets/:id", addBalance)


export default Router