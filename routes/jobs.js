const express = require("express");
const router = express.Router();
const Jobs = require("../models/Jobs");
const jwt = require("jsonwebtoken");

// GET: display jobs
router.get("/", async (req, res) => {
  try {
    // get payload from JWT
    const credentials = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET || "a",
    );

    // unpack query parameters (for filter)
    const { sortBy, orderBy, employmentType, status } = req.query;
    const findQuery = {
      userId: credentials.id,
    };
    if (employmentType) {
      findQuery.type = employmentType;
    }
    if (status) {
      findQuery.status = status;
    }

    // Query mongoose
    const jobsEntries = await Jobs.find(findQuery, {
      userId: false,
    }).sort({ [sortBy]: Number(orderBy) });

    return res.status(200).json({
      jobsEntries,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: insert new jobs
router.post("/", async (req, res) => {
  try {
    // get payload from JWT
    const credentials = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET || "a",
    );

    const { role, company, type, status, notes } = req.body;
    // Insert into mongoose
    await Jobs.insertOne({ userId: credentials.id, role, company, type, status, notes });
    return res.status(201).json({ message: "Job inserted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH: update job
router.patch("/:_id", async (req, res) => {
  try {
    // get payload from JWT
    const credentials = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET || "a",
    );
    
    // Update mongoose
    await Jobs.updateOne({ _id: req.params._id }, { $set: req.body });
    return res.status(200).json({ message: "Job updated successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE: delete job
router.delete("/:_id", async (req, res) => {
  try {
    // get payload from JWT
    const credentials = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET || "a",
    );

    // Delete from mongoose
    await Jobs.deleteOne({ _id: req.params._id });
    return res.status(200).json({ message: "Job deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

module.exports = router;
