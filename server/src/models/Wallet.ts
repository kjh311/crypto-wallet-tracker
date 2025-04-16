import mongoose, { mongo } from "mongoose";

const walletSchema = new mongoose.Schema({
    address: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
})

const Wallet = mongoose.model('Wallet', walletSchema);

export default Wallet;