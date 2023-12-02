import mongoose from "mongoose";
const bookModeL=mongoose.Schema({
    isbn:{
        type: Number,
        required: true,
        unique: true,
    },
    title:{
        type:String,
        required:true,
    },
    author:{
        type: String,
        required:true,
    },
    description:{
        type:String,
    },
    relaseYear:{
        type:Number,
        required:true,
    },
    genre:{
        type:String,
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"users",
        required:true,
    },
    createdAt:{
        type: Date,
        default:()=>{
            return new Date();
        },
    },
});
export default mongoose.model("books",bookModeL);