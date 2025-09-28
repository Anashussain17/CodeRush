import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Score", ScoreSchema);
