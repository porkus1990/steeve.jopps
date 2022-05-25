import { db } from 'src/lib/db';
import type {
  QueryResolvers,
  MutationResolvers,
  JobResolvers,
} from 'types/graphql';

export const jobs: QueryResolvers['jobs'] = () => {
  return db.job.findMany();
};

export const job: QueryResolvers['job'] = ({ id }) => {
  return db.job.findUnique({
    where: { id },
  });
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

export const deleteJob: MutationResolvers['deleteJob'] = ({ id }) => {
  return db.job.delete({
    where: { id },
  });
};

export const Job: JobResolvers = {
  categories: (_obj, { root }) =>
    db.job.findUnique({ where: { id: root.id } }).categories(),
  tags: (_obj, { root }) =>
    db.job.findUnique({ where: { id: root.id } }).tags(),
};
