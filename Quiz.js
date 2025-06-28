import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  classLevel: { type: String, required: true },
  questions: [
    {
      question: String,
      options: [String],
      answer: String
    }
  ]
}, { timestamps: true });

export default mongoose.model('Quiz', quizSchema);
