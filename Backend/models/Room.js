const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true, unique: true },
  type: { type: String, enum: ['single', 'double', 'quad'], required: true },
  capacity: { type: Number, required: true },
  occupants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  pricePerSemester: { type: Number, required: true },
  isFull: { type: Boolean, default: false },
  status: { type: String, enum: ['available', 'maintenance'], default: 'available' }
}, { timestamps: true });

module.exports = mongoose.model('Room', RoomSchema);