import express from 'express';
import Score from '../models/Score.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, quizId, score } = req.body;
    const newScore = new Score({ userId, quizId, score });
    const savedScore = await newScore.save();
    res.status(201).json(savedScore);
  } catch (err) {
    res.status(500).json({ message: 'Error saving score' });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const scores = await Score.find({ userId: req.params.userId }).populate('quizId');
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching scores' });
  }
});

router.get('/top', async (req, res) => {
  try {
    const topScores = await Score.find().sort({ score: -1 }).limit(10).populate('userId quizId');
    res.json(topScores);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching leaderboard' });
  }
});

export default router;
