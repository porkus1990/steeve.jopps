// This file is autogenerated by Redwood and will be overwitten periodically

import { RedwoodRecord } from '@redwoodjs/record';

import { db } from 'src/lib/db';
import datamodel from 'src/models/datamodel';
import Job from 'src/models/Job';
import JobCategory from 'src/models/JobCategory';
import JobUser from 'src/models/JobUser';
import JobUserPick from 'src/models/JobUserPick';
import User from 'src/models/User';

RedwoodRecord.db = db;
RedwoodRecord.schema = datamodel;

Job.requiredModels = [];
JobUser.requiredModels = [];
JobUserPick.requiredModels = [];
User.requiredModels = [];

export { Job, JobCategory, JobUser, JobUserPick, User };
