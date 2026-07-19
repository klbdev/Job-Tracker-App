const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Send data to "users" collection
// Mongoose will automatically look for or create a collection named users (lowercase and pluralized "User")
module.exports = mongoose.model("User", userSchema);
