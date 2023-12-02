import express from "express";
import {addBook,getAll,editBook,deletBook,getDet} from "../Controllers/BooksControllers.js";

const BooksRoutes = express.Router();
BooksRoutes.get("/",getAll);
BooksRoutes.post("/add",addBook);
BooksRoutes.post("/edit/:id",editBook);
BooksRoutes.get("/delete/:id",deletBook);
BooksRoutes.post("/get/:id",getDet);
export default BooksRoutes;