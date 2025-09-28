import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import leaderboardRoutes from "./controller/leaderBoard.js"
import "./dbConnect.js";

dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/leaderboard", leaderboardRoutes);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
