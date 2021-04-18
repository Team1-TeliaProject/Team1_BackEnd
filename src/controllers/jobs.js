// import Job from "../modals/job.js";
const Job = require("../modals/job.js");

const getAllJobs = async (req, res, next) => {
  try {
    const result = await Job.find({});
    res.json(result);
  } catch (err) {
    console.log("Error: ", err);
  }
};
const getOneJob = async (req, res, next) => {
  //Takes in the id from job when clicked in info and sends back the related job card
  try {
    const newId = req.body.id;
    const result = await Job.findOne({ id: newId });
    res.json(result);
  } catch (err) {
    console.log("Error: ", err);
  }
};
const createJob = async (req, res, next) => {
  //TODO
  try {
    const job = req.body;
    let NewJob = new Job(job);
    NewJob.save((err) => {
      if (err) return res.json("Failed to add!!!!");
      res.json("Successfully added NewJob");
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};
const updateJob = async (req, res, next) => {
  //TODO
  try {
    const jobId = req.body.id;
    const result = await Job.updateOne({ id: jobId }, { $set: { ...jobId } });
    if (result.nModified > 0) res.json("Successfully updated");
  } catch (err) {
    console.log("Error: ", err);
  }
};

const deleteJob = async (req, res, next) => {
  // Add a req.body checker //TODO
  try {
    const newId = req.body.id;
    const result = await Job.deleteOne({ id: newId });
    res.Json("Successfully Removed");
  } catch (err) {
    console.log("Error: ", err);
  }
};

module.exports = { getAllJobs, getOneJob, createJob, updateJob, deleteJob };
