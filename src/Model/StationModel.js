import mongoose from 'mongoose'

const stationSchema = new mongoose.Schema({
   station_id: {
      type: Number,
      required: true
   },
   station_name: {
      type: String,
      required: true
   },
   longitude: {
      type: Number,
      required: true
   },
   latitude:{
    type: Number,
    required: true
   }
 
})
const stationModel = mongoose.model('station', stationSchema);

export default stationModel