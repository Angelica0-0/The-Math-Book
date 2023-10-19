const userQuestionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  question: String,
  datePosted: { type: Date, default: Date.now },
  answered: { type: Boolean, default: false },
  answer: String,
  answeredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Expert' }
});

module.exports = mongoose.model('UserQuestion', userQuestionSchema);