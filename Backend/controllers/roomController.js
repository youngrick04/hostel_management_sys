const Room = require('../models/Room');

// @desc    Get all rooms
// @route   GET /api/rooms
exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a room (Admin only)
// @route   POST /api/rooms
exports.createRoom = async (req, res) => {
  try {
    const { roomNumber, type, capacity, pricePerSemester } = req.body;

    const roomExists = await Room.findOne({ roomNumber });
    if (roomExists) return res.status(400).json({ message: 'Room already exists' });

    const room = new Room({
      roomNumber,
      type,
      capacity,
      pricePerSemester
    });

    await room.save();
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};