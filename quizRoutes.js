import express from 'express';
import Quiz from '../models/Quiz.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (err) {
    res.status(500).json({ message: 'Error creating quiz' });
  }
});

router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching quizzes' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching quiz' });
  }
});

export default router;
