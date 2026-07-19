const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    type: {
      type: String,
      enum: ["Full Time", "Part Time", "Internship", "Contract"],
    },
    status: {
      type: String,
      enum: ["Applied", "Interviewing", "Accepted", "Rejected"],
    },
    notes: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Jobs", jobsSchema);