import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Wallet from "./models/Wallet";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error("MONGODB_URI is not defined in your environment variables");
}

mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/api/wallets", async (req, res) => {
  const { address, userId } = req.body;

  try {
    const newWallet = new Wallet({ address, userId });
    await newWallet.save();
    res.status(201).json({ message: "Wallet saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save wallet" });
  }
});

app.get("/", (req, res) => {
  res.send("API is running");
});

// Example GET route
// app.get('/api/hello', (req, res) => {
//     res.json({ message: 'Hello from the backend!' });
//   });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
