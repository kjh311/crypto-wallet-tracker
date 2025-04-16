import express, { Express, Request, Response } from 'express';
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Wallet from "./models/Wallet"; 

dotenv.config();

const app: Express = express();
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

// Define the route handlers as a function type
const getWalletsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const wallets = await Wallet.find(); 
    res.status(200).json(wallets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch wallets' });
  }
};

const postWalletsHandler = async (req: Request, res: Response): Promise<void> => {
  const { address, userId } = req.body;

  try {
    const newWallet = new Wallet({ address, userId });
    await newWallet.save();
    res.status(201).json({ message: "Wallet saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save wallet" });
  }
};

const deleteWalletsHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedWallet = await Wallet.findByIdAndDelete(id);
    if (!deletedWallet) {
      res.status(404).json({ error: 'Wallet not found' });
      return; // End the function after sending the response
    }
    res.status(200).json({ message: 'Wallet deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete wallet' });
  }
};

// Attach handlers to the routes
app.get('/api/wallets', getWalletsHandler);
app.post('/api/wallets', postWalletsHandler);
app.delete('/api/wallets/:id', deleteWalletsHandler);

app.get('/', (req: Request, res: Response) => {
  res.send("API is running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
