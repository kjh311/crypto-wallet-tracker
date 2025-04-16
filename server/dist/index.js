"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const Wallet_1 = __importDefault(require("./models/Wallet"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in your environment variables");
}
mongoose_1.default
    .connect(mongoUri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
app.post("/api/wallets", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { address, userId } = req.body;
    try {
        const newWallet = new Wallet_1.default({ address, userId });
        yield newWallet.save();
        res.status(201).json({ message: "Wallet saved!" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to save wallet" });
    }
}));
app.get("/", (req, res) => {
    res.send("API is running");
});
// Example GET route
// app.get('/api/hello', (req, res) => {
//     res.json({ message: 'Hello from the backend!' });
//   });
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
