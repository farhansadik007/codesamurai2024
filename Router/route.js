import  express  from "express";

const Router=express.Router()
import { addBook, update ,getByID,getBook} from "../Controller/apiController.js";
Router.post("/api/books",addBook);
Router.put("/api/books/:id",update);
Router.get("/api/books/:id",getByID);
Router.get("/api/books",getBook)





export default Router