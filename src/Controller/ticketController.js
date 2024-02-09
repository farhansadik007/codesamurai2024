import mongoose from "mongoose";
import TrainModel from "../Model/TrainModel.js";
import UserModel from "../Model/UserModel.js";

export const purchaseTicket = async (req, res) => {

    const payload = req.body
    const id = payload.wallet_id;
    const start = payload.station_from;
    const end = payload.station_to;
    const time = payload.time_after
    const session = await mongoose.startSession()
    try {
        session.startTransaction()

        const isUserExists = await UserModel.findOne({ user_id: id })
        if (!isUserExists) {
            throw new Error("404-User doesn't exists!")
        }
        let amount = isUserExists.balance

        const isTrainExists = await TrainModel.findOne({
            stops: {
                $elemMatch: {
                    station_id: start,
                    departure_time: { $gt: time }
                }
            },
            stops: {
                $elemMatch: {
                    station_id: end
                }
            }
        }).sort({ "stops.fare": 1 }).limit(1)

        if (!isTrainExists || isTrainExists.capacity <= 0) {
            throw new Error(`403-no ticket available for station: ${start} to station: ${end}`)
        }

        const trainId = isTrainExists._id
        let seat = isTrainExists.capacity

        const stop = (isTrainExists.stops)
        const fare = stop[(isTrainExists.stops.length - 1)].fare

        const updateSeat = await TrainModel.findByIdAndUpdate(trainId, {
            capacity: seat - 1
        }, { new: true, upsert: true, session })

        if (!updateSeat) {
            throw new Error("404-failed to booking")
        }

        if (amount < fare) {
            throw new Error(`402-recharge amount: ${fare - amount} to purchase the ticket`)
        }

        amount = amount - fare;

        const updateBalance = await UserModel.findOneAndUpdate({ user_id: id }, { balance: amount }, { new: true, upsert: true, session })

        if (!updateBalance) {
            throw new Error("404-failed to booking")
        }

        const train_id = Math.floor(Math.random() * 900) + 100;

        const result = {
            train_id,
            balance: amount,
            wallet_id: id,
            stations: stop
        }
        res.status(201).json(result)
        await session.commitTransaction();
        await session.endSession()
    } catch (error) {
        const err = error.message.split('-')
        const code = Number(err[0])
        const sms = err[1]
        res.status(code).json({ message: sms });
        await session.abortTransaction()
        await session.endSession()
    }
}
