import {readFile,writeFile}from "fs/promises";
import userModeL from "../Model/user.js"

export const addUser=async(req, res)=>{
    const {body}=req;
    try{
        const addUser= await userModeL.create(body);

        if(!addUser){
            return res.status(404).json("user not created");
        }
        return res.json({message:"user added",user:addUser});
    }catch(error){
        console.log("balablu biloloi",error);
        return res.status(400).json(error.message);
    }
    // const nonParsefile = await readFile("users.json");
    // const File =JSON.parse(nonParsefile);
    // File.push(body);
    // const saveFile = await writeFile("users.json",JSON.stringify(File));
    // return res.json("user added")
};
export const getAll =async(req, res)=>{
    const findUser=await userModeL.find()
    if(!findUser || findUser.length==0){
        return res.json("no users found");
    }
    return res.status(200).json(findUser);

    // const users=await readFile("users.json");
    // const finUs=JSON.parse(users);
    // return res.status(200).json(finUs);
};
export const editUser =async(req, res)=>{
    const {params,body}=req;
    const {id}=params;
    const filter ={_id: id};
    
    const editUserDB= await userModeL.findOneAndUpdate(filter,body);
    if(!editUserDB){
        return res.json("error while editing user");
    } 
    return res.status(200).json("user edited");

//     const nonParsefile=await readFile("users.json");
//     const File= JSON.parse(nonParsefile);

//     const i=File.findIndex((i /*e*/)=>{
//         return i.id==id;
// });

//     File[i]=body;

//     await writeFile("users.json",JSON.stringify(File));

//     return res.status(200).json("user ediotor");
};
export const deletUser = async (req, res) => {
    const { params } = req;
    const { id } = params;

    const filter = { _id: id };
  
    const removeUserDB = await userModeL.findOneAndDelete(filter);
  
    if (!removeUserDB) {
      return res.json("User not found or error while deleting user.");
    }
    return res.status(200).json("removed");

//     const nonParsefile=await readFile("users.json");
//     const File= JSON.parse(nonParsefile);

//     const i=File.findIndex((i /*e*/)=>{
//         return i.id==id;
// });

//     File.splice(i,1);

//     await writeFile("users.json",JSON.stringify(File));

//     return res.status(200).json("remove");
};