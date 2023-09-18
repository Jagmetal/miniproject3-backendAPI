require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Connect to MongoDB using mongoose
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Remove the useFindAndModify option
  })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
    });
  

// Middleware to parse JSON requests
app.use(express.json());

// API routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to myMongoDB application." });
});

// Set the port and start the server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
