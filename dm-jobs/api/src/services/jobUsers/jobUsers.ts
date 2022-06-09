import type { QueryResolvers, MutationResolvers } from 'types/graphql';

import { db } from 'src/lib/db';

export const jobUsers: QueryResolvers['jobUsers'] = () => {
  return db.jobUser.findMany();
};

export const jobUsersByUser: QueryResolvers['jobUsersByUser'] = ({
  userId,
}) => {
  return db.jobUser.findMany({
    where: { userId },
  });
};

export const jobUser: QueryResolvers['jobUser'] = ({ id }) => {
  return db.jobUser.findUnique({
    where: { id },
  });
};

export const createJobUser: MutationResolvers['createJobUser'] = ({
  input,
}) => {
  return db.jobUser.create({
    data: input,
  });
};

export const updateJobUser: MutationResolvers['updateJobUser'] = ({
  id,
  input,
}) => {
  return db.jobUser.update({
    data: input,
    where: { id },
  });
};

export const deleteJobUser: MutationResolvers['deleteJobUser'] = ({ id }) => {
  return db.jobUser.delete({
    where: { id },
  });
};
