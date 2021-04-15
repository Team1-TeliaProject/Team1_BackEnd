export const jobsRouter = require('express').Router();
import {
  getAllJobs,
  getOneJob,
  createJob,
  updateJob,
  deleteJob,
} from '../controllers/jobs';

jobsRouter.get('/', getAllJobs);
jobsRouter.get('/:jobId', getOneJob);
jobsRouter.post('/', createJob);
jobsRouter.put('/:jobId', updateJob);
jobsRouter.delete('/:jobId', deleteJob);
