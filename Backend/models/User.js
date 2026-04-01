const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // We'll hash this later!
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  phoneNumber: { type: String },
  roomNumber: { type: String, default: 'unassigned' }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);