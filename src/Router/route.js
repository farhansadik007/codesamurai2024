import express from "express";
import {
    addBook,
    update,
    getByID,
    getBook
} from "../Controller/apiController.js";

const Router = express.Router()

//GET
Router.get("/api/books", getBook)
Router.get("/api/books/:id", getByID);

//POST
Router.post("/api/books", addBook);

//PUT
Router.put("/api/books/:id", update);


export default Router