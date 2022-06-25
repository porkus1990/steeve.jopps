import type { QueryResolvers, MutationResolvers } from 'types/graphql';

import { db } from 'src/lib/db';

export const jobUserPicks: QueryResolvers['jobUserPicks'] = () => {
  return db.jobUserPick.findMany();
};

export const jobUserPick: QueryResolvers['jobUserPick'] = ({ id }) => {
  return db.jobUserPick.findUnique({
    where: { id },
  });
};

export const jobUserPicksByUser: QueryResolvers['jobUserPicksByUser'] = ({
  userId,
}) => {
  return db.jobUserPick.findMany({ where: { userId: userId } });
};

export const jobUserPicksByJob: QueryResolvers['jobUserPicksByJob'] = ({
  jobId,
}) => {
  return db.jobUserPick.findUnique({ where: { jobId: jobId } });
};

export const createJobUserPick: MutationResolvers['createJobUserPick'] = ({
  input,
}) => {
  return db.jobUserPick.create({
    data: input,
  });
};

export const updateJobUserPick: MutationResolvers['updateJobUserPick'] = ({
  id,
  input,
}) => {
  return db.jobUserPick.update({
    data: input,
    where: { id },
  });
};

export const deleteJobUserPick: MutationResolvers['deleteJobUserPick'] = ({
  id,
}) => {
  return db.jobUserPick.delete({
    where: { id },
  });
};
