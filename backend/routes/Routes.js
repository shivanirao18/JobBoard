const express = require("express");
const { addJob, getJobs } = require("../controllers/JobController");
// const authenticateUser = require("../middleware/Authmiddleware.js");

const router = express.Router();

// Route to create a job (protected)
router.post("/add", addJob);

// Route to get all jobs (public)
router.get("/list", getJobs);

module.exports = router;
