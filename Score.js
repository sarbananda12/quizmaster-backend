import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Score', scoreSchema);
