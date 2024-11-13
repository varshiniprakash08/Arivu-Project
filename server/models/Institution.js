const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contactInfo: { type: String, required: true },
    studentsCount: { type: Number, required: true },
    teachersCount: { type: Number, required: true },
    resourcesNeeded: [String],
    teachersNeeded: [String],
    appliedTeachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Institution', institutionSchema);
