const Room = require('../models/Room');
const Booking = require('../models/Bookings');

exports.bookRoom = async (req, res) => {
  try {
    const { userId, roomId } = req.body;

    // Check if student already has a booking
    const existingBooking = await Booking.findOne({ student: userId });
    if (existingBooking) {
      return res.status(400).json({ message: 'Student already has a room assigned.' });
    }

    // 1. Find the room
    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ message: 'Room not found' });

    // 2. Check capacity
    if (room.occupants.length >= room.capacity) {
      return res.status(400).json({ message: 'Room is full!' });
    }

    // 3. Create the booking
    const booking = new Booking({
      student: userId,
      room: roomId,
      status: 'confirmed'
    });

    // 4. Update the Room's occupants list
    room.occupants.push(userId);
    
    // 5. If it's now full, mark it as isFull
    if (room.occupants.length === room.capacity) {
      room.isFull = true;
    }

    await booking.save();
    await room.save(); // Don't forget to save the room changes!

    res.status(201).json({ message: 'Room booked successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get booking details for a specific user
// @route   GET /api/bookings/user/:userId
exports.getUserBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({ student: req.params.userId })
      .populate('room', 'roomNumber type pricePerSemester') // Get specific room fields
      .populate('student', 'name email'); // Get student name and email

    if (!booking) return res.status(404).json({ message: 'No booking found for this user' });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};