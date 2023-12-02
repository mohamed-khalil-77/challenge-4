import {readFile,writeFile}from "fs/promises";
import bookModeL from "../Model/BooksMode.js"


export const addBook=async(req, res)=>{
    const {body,headers}=req;
    const {id}=headers;

    try{
        const addbook=await bookModeL.create({ ...body,owner:id});

        if(!addbook){
            return res.status(404).json("book not created");
        }
        return res. json({message:"book added",book:addbook});
    }catch(error){
        console.log("blalabaakalal",error);
        return res.status(400).json(error.message);
    }

    // const nonParsefile = await readFile("Books_Fields.json");
    // const File =JSON.parse(nonParsefile);
    // File.push(body);
    // const saveFile = await writeFile("Books_Fields.json",JSON.stringify(File));
    // return res.json("user added")
};
export const getAll =async(req, res)=>{
    const findBook=await bookModeL.find()
    if(!findBook || findBook.length==0){
        return res.json("no users found");
    }
    return res.status(200).json(findBook);
    // const Books=await readFile("Books_Fields.json");
    // const finUs=JSON.parse(Books);
    // return res.status(200).json(finUs);
};
export const editBook =async(req, res)=>{
    const {params,body}=req;
    const {id}=params;
    const filter={_id:id};

    const editBookDb=await bookModeL.findOneAndUpdate(filter,{...body,owner:id});
    if(!editBookDb){
        return res.json("error while editing book");
    }
    return res.status(200).json("user edited");
//     const nonParsefile=await readFile("Books_Fields.json");
//     const File= JSON.parse(nonParsefile);

//     const i=File.findIndex((i /*e*/)=>{
//         return i.id==id;
// });

//     File[i]=body;

//     await writeFile("Books.json",JSON.stringify(File));

//     return res.status(200).json("user ediotor");
};
export const deletBook =async(req, res)=>{
    const {params}=req;
    const {id}=params;

    const filter={_id:id};

    const removeBookDb=await bookModeL.findOneAndDelete(filter,{owner:id});
    if(!removeBookDb){
        return res.json("book not found or error while deleting user .");
    }
    return res.status(200).json("removed");
//     const nonParsefile=await readFile("Books_Fields.json");
//     const File= JSON.parse(nonParsefile);

//     const i=File.findIndex((i /*e*/)=>{
//         return i.id==id;
// });

//     File.splice(i,1);

//     await writeFile("Books.json",JSON.stringify(File));

//     return res.status(200).json("remove");
};
export const getDet = async (req, res) => {
    let { params } = req;
    let { id } = params;
    const file = await readFile("Books_Fields.json");
    const File = JSON.parse(file);
    const elem = File.filter((e) => {
      return delete e.Description, delete e.ISBN;
    });
    if (elem) {
      let { theBook, Author } = elem;
      return res.json(`theBook:${theBook} ,author:${Author}`);
    } else {
      return res.json("Error the book didn't exist in data base");
    }
  };