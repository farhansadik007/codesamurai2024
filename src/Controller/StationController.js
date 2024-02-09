import stationModel from "../Model/StationModel.js";

export const addStation = async (req, res) => {

    try {

        const newStation = new stationModel(req.body);
        newStation.save();
        res.status(201).json(req.body);
    }
    catch (error) {
        res.json(500).json(error);
    }

}
export const getAllStation = async (req, res) => {
    try {
        const data = await stationModel.find({}).sort({ station_id: 1 });
        res.status(200).json({ stations: data });

    }
    catch (error) {
        res.status(500).json(error);
    }

}