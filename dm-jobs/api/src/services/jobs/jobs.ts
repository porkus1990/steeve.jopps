import type {
  QueryResolvers,
  MutationResolvers,
  JobResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const jobs: QueryResolvers['jobs'] = () => {
  return db.job.findMany();
};

export const job: QueryResolvers['job'] = ({ id }) => {
  return db.job.findUnique({
    where: { id },
  });
};

export const jobsNotPicked = async () => {
  const allJobs = await db.job.findMany({ where: { status: 'pending' } });
  const jobPicks = await db.jobUserPick.findMany();
  const mappedPicks = jobPicks.map((p) => {
    return p.jobId;
  });

  const filtered = allJobs.filter((job) => mappedPicks.indexOf(job.id) === -1);

  return filtered;
};

export const createJob: MutationResolvers['createJob'] = ({ input }) => {
  return db.job.create({
    data: input,
  });
};

export const updateJob: MutationResolvers['updateJob'] = ({ id, input }) => {
  return db.job.update({
    data: input,
    where: { id },
  });
};

export const updateJobPickedBy: MutationResolvers['updateJobPickedBy'] = ({
  id,
  input,
}) => {
  return db.job.update({
    data: input,
    where: { id },
  });
};

export const deleteJob: MutationResolvers['deleteJob'] = ({ id }) => {
  return db.job.delete({
    where: { id },
  });
};

export const Job: JobResolvers = {
  pickedBy: (_obj, { root }) =>
    db.job.findUnique({ where: { id: root.id } }).pickedBy(),
};
