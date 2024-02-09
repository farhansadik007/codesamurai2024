import UserModel from "../Model/UserModel.js";
export const addUser=async(req,res)=>{

    try{
        
      const newUser=new UserModel(req.body);
      newUser.save();
      res.status(201).json(req.body);
    }
    catch(error){
        res.json(500).json(error);
    }

}