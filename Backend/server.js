const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// Import routes
const authRoutes = require('./routes/authRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');


// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Body parser (Allows your server to read JSON sent from the frontend)
app.use(express.json());

// Basic Test Route
app.get('/', (req, res) => {
  res.send('Hostel Management API is running...');
});

const PORT = process.env.PORT || 5000;

// Use routes
app.use('/api/auth', authRoutes);

// Use routes
app.use('/api/rooms', roomRoutes);

// boolings Routes
app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});