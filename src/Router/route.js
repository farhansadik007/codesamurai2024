import express from "express";
import { addUser } from "../Controller/UserController.js";

const Router = express.Router()
Router.post("/api/users",addUser);



export default Router