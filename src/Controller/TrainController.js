import stationModel from "../Model/StationModel.js";
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

export const listTrain = async (req, res) => {
    try {
        const trains = await TrainModel.find();

        const stops = trains.map(train => {
            const stop = train.stops.find(stop => stop.station_id == req.params.stationId)
            return {
                train_id: train.train_id,
                arrival_time: stop.arrival_time,
                departure_time: stop.departure_time
            }
        })

        res.json({
            station_id: Number(req.params.stationId),
            trains: stops
        })


    } catch (error) {
        res.status(404).json({ "message": `station with id: ${req.params.stationId} was not found` })
    }
}