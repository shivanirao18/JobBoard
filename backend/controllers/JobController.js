const { db } = require("../config/Fconfig.js");
const createJob = require("../model/JobModel.js");

const addJob = async (req, res) => {
  try {
    const { title, description, company, location, salary,skills,url } = req.body;

   
    if (!title || !description || !company || !location || !salary||!skills||!url) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newJob = createJob(title, description, company, location, salary,skills,url);

   
    const docRef = await db.collection("jobs").add(newJob);

    return res.status(201).json({ id: docRef.id, ...newJob });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


const getJobs = async (req, res) => {
  try {
    const snapshot = await db.collection("jobs").get();
    const jobs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return res.json(jobs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { addJob, getJobs };
