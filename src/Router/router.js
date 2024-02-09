import express from "express";
import { addUser } from "../Controller/UserController.js";
import { addTrain } from "../Controller/TrainController.js";
import { addStation, getAllStation } from "../Controller/StationController.js";
import { addBalance, getWallet } from "../Controller/walletController.js";
import { purchaseTicket } from "../Controller/ticketController.js";

const Router = express.Router()

Router.post("/api/users", addUser);
Router.post("/api/trains", addTrain);
Router.post("/api/stations", addStation);

Router.post("/api/users", addUser);
Router.get("/api/stations", getAllStation);
Router.get("/api/wallets/:id", getWallet);
Router.put("/api/wallets/:id", addBalance);

Router.post('/api/tickets', purchaseTicket)


export default Router