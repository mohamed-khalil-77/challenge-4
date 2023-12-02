import express from "express";
import http from "http";
import bodyParser from "body-parser";
import UsersRoutes from "./Routes/UsersRoutes.js";
import BooksRoutes from "./Routes/BooksRoutes.js"
import mongoose from "mongoose";
const PORT=4000;


const app= express();
http.createServer(app);
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/bookStore").then(()=>{
    console.log("data base connected")
})
.catch((err)=>{
    console.log(err);
})

app.use("/users", UsersRoutes);
app.use("/Books",BooksRoutes);

app.listen(PORT,()=>{
    console.log(`app live on port ${PORT}`);
});