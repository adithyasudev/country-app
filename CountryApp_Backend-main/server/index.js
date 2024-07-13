require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConnection');
const userRouter = require('./routes/userRoutes');
const countryRouter = require('./routes/countryRoutes');
const auth = require('./middleware/auth');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRouter);
app.use('/api/countries', auth, countryRouter); // Protect the /api/countries route with auth middleware

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
