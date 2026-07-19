const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // insert the new user into MongoDB
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "Email registered successfully!" });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ message: "This email is already registered."} )
        }
        res.status(500).json({ message: err.message });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        // lookup MongoDB for the user with a particular email
        const user = await User.findOne({ email });

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        // Successful login, set up JWT for the user
        const credentials = { id: user._id, email: user.email };
        const token = jwt.sign(credentials, process.env.JWT_SECRET || "a", { expiresIn: "1h" });
        res.status(200).json({ user: credentials, token });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

module.exports = router;
