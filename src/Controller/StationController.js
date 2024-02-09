import stationModel from "../Model/StationModel.js";
export const addStaion=async(req,res)=>{

    try{
        
      const newStation=new stationModel(req.body);
      newStation.save();
      res.status(201).json(req.body);
    }
    catch(error){
        res.json(500).json(error);
    }

}