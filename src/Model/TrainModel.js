import mongoose from 'mongoose'

const stopSchema = new mongoose.Schema({
    station_id: {
        type: Number,
        required: true
    },
    arrival_time: {
        type: mongoose.Schema.Types.Mixed,
    },
    departure_time: {
        type: mongoose.Schema.Types.Mixed,

    },
    fare: {
        type: Number,
        required: true
    },
});

const trainSchema = new mongoose.Schema({
    train_id: {
        type: Number,
        required: true
    },
    train_name: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true,
    },
    stops: {
        type: [stopSchema],
        required: true
    }

})
const TrainModel = mongoose.model('Train', trainSchema);

export default TrainModel