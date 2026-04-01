const express = require('express');
const router = express.Router();
const { bookRoom, getUserBooking } = require('../controllers/bookingController');

router.post('/', bookRoom);
router.get('/user/:userId', getUserBooking);

module.exports = router;