console.log('Room routes loaded!');
const express = require('express');
const router = express.Router();
const { getRooms, createRoom } = require('../controllers/roomController');

// This defines GET /api/rooms
router.get('/', getRooms);

// This defines POST /api/rooms
router.post('/', createRoom);

module.exports = router;