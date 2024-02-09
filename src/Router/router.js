import express from "express";
import { addUser } from "../Controller/UserController.js";
<<<<<<< HEAD
import { addStaion } from "../Controller/StationController.js";
import { addTrain } from "../Controller/TrainController.js";
const Router = express.Router()

Router.post("/api/users",addUser);
Router.post("/api/trains", addTrain);
Router.post("/api/stations",addStaion);


=======
import { addStaion, getAllStation } from "../Controller/StationController.js";
import { addBalance, getWallet } from "../Controller/walletController.js";
const Router = express.Router()
Router.post("/api/users", addUser);
Router.post("/api/stations", addStaion)
Router.get("/api/stations", getAllStation);
Router.get("/api/wallets/:id", getWallet);
Router.put("/api/wallets/:id", addBalance)
>>>>>>> becd2251443e878ac0b9f79fd1ac5fffe7b7136c

export default Router