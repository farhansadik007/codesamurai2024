import express from "express";
import {addBook,getBook,updateBook,getByID} from '../Controller/apiController.js'

const Router = express.Router()

//GET
Router.get("/api/books", getBook)
Router.get("/api/books/:id", getByID);

//POST
Router.post("/api/books", addBook);

//PUT
Router.put("/api/books/:id", updateBook);


export default Router