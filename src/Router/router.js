import express from "express";
import { addUser } from "../Controller/UserController.js";
import { addStation } from "../Controller/StationController.js";
import { addTrain } from "../Controller/TrainController.js";
import { getAllStation } from "../Controller/StationController.js";
import { addBalance, getWallet } from "../Controller/walletController.js";
import { purchaseTicket } from "../Controller/ticketController.js";

const Router = express.Router()

Router.post("/api/users", addUser);
Router.post("/api/trains", addTrain);

Router.post("/api/users", addUser);
Router.post("/api/stations", addStation)
Router.get("/api/stations", getAllStation);
Router.get("/api/wallets/:id", getWallet);
Router.put("/api/wallets/:id", addBalance);

Router.post('/api/tickets', purchaseTicket)


export default Router