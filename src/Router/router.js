import express from "express";
import { apiController } from "../Controller/apiController.js";



const router = express.Router()

//GET
router.get("/api/books", apiController.getBook)
router.get("/api/books/:id", apiController.getByID);

//POST
router.post("/api/books", apiController.addBook);

//PUT
router.put("/api/books/:id", apiController.updateBook);


export default router