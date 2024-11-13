const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'teacher', 'institution'], required: true },
    qualification: String,
    examPreparingFor: String,
    preparationDuration: String,
    difficultSubjects: String,
    roadmap: String,  // AI-generated roadmap
    appliedInstitutions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Institution' }],
    resume: String,  // for teacher role
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
