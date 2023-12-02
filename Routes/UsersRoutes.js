import express from "express";
import {addUser,getAll,editUser,deletUser} from "../Controllers/UsersControllers.js";

const UsersRoutes = express.Router();
UsersRoutes.get("/",getAll);
UsersRoutes.post("/add",addUser);
UsersRoutes.post("/edit/:id",editUser);
UsersRoutes.get("/delete/:id",deletUser);

export default UsersRoutes;