import express from "express";
import Score from "../models/Score.js";

const router = express.Router();

// ✅ Save player score
router.post("/", async (req, res) => {
  try {
    const { name, score } = req.body;
    if (!name || score === undefined) {
      return res.status(400).json({ error: "Name and score are required" });
    }

    const newScore = new Score({ name, score });
    await newScore.save();
    res.status(201).json({ message: "Score saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Get top 10 scores
router.get("/", async (req, res) => {
  try {
    const scores = await Score.find()
      .sort({ score: -1 })
      .limit(10);
    res.json(scores);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
