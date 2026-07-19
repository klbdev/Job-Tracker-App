const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Enable Cross-Origin Resource Sharing
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// Middleware for JSON
app.use(express.json());

// Establish connection to MongoDB URI
mongoose
  .connect("mongodb://localhost:27017/job_tracker_example")
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((err) => console.log(`Failed to connect to MongoDB: ${err}`));

// authentication api
const auth = require("./routes/auth");
app.use("/api/auth", auth);

// user job api
const jobs = require("./routes/jobs");
app.use('/api/jobs', jobs);

// Start server
app.listen(3000, () => {
  console.log("Express server running.");
});
