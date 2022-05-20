import { db } from 'src/lib/db';
import type { QueryResolvers, MutationResolvers } from 'types/graphql';

export const jobUsers: QueryResolvers['jobUsers'] = () => {
  return db.jobUser.findMany();
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
