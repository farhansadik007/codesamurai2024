import UserModel from "../Model/UserModel.js"

export const getWallet = async (req, res) => {
    try {
        const id = req.params.id
        const data = await UserModel.findOne({ user_id: id })
        if (!data) {
            throw new Error(`wallet with id: ${id} was not found`)
        }
        const result = {
            wallet_id: data.user_id,
            balance: data.balance,
            wallet_user: {
                user_id: data.user_id,
                user_name: data.user_name
            }
        }
        res.status(200).json(result);
    } catch (error) {
        console.log();
        res.status(404).json({ message: error.message });
    }
}

export const addBalance = async (req, res) => {
    try {
        let amount = req.body.recharge;
        const id = req.params.id

        if ((amount < 100 || amount > 10000)) {
            console.log('dhukse');
            throw new Error(`400-invalid amount: ${amount}`)
        }

        const user = await UserModel.findOne({ user_id: id })

        if (!user) {
            throw new Error(`404-wallet with id: ${id} was not found`)
        }

        amount = amount + user.balance;


        const data = await UserModel.findOneAndUpdate({ user_id: id }, {
            balance: amount
        }, { new: true, upsert: true })

        const result = {
            wallet_id: data.user_id,
            balance: data.balance,
            wallet_user: {
                user_id: data.user_id,
                user_name: data.user_name
            }
        }
        res.status(200).json(result);

    } catch (error) {
        const err = error.message.split('-')
        const code = Number(err[0])
        const sms = err[1]
        res.status(code).json({ message: sms });
    }
}