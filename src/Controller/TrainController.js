import TrainModel from "../Model/TrainModel.js";


export const addTrain = async (req, res) => {
    try {
        const newTrain = await TrainModel.create(req.body);

        const service_start = newTrain.stops[0].departure_time
        const service_ends = newTrain.stops[newTrain.stops.length - 1].arrival_time
        const num_stations = newTrain.stops.length

        return res.status(201).json(
            {
                "train_id": newTrain.id,
                "train_name": newTrain.train_name,
                "capacity": newTrain.capacity,
                "service_start": service_start,
                "service_ends": service_ends,
                "num_stations": num_stations,
            }

        )
    }
    catch (error) {
        res.status(500).json(error);
    }

}