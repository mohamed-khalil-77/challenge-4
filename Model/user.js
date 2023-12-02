import mongoose from "mongoose";
const userModel= mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    createAt:{
        type: String,
        default: ()=>{
            return new Date();
        },
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },

})
export default mongoose.model("users", userModel);