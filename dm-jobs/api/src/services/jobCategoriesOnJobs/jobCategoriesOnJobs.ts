import { db } from 'src/lib/db';
import type {
  QueryResolvers,
  MutationResolvers,
  JobCategoriesOnJobResolvers,
} from 'types/graphql';

export const jobCategoriesOnJobs: QueryResolvers['jobCategoriesOnJobs'] =
  () => {
    return db.jobCategoriesOnJob.findMany();
  };

export const jobCategoriesOnJob: QueryResolvers['jobCategoriesOnJob'] = ({
  id,
}) => {
  return db.jobCategoriesOnJob.findUnique({
    where: { id },
  });
};

export const createJobCategoriesOnJob: MutationResolvers['createJobCategoriesOnJob'] =
  ({ input }) => {
    return db.jobCategoriesOnJob.create({
      data: input,
    });
  };

export const updateJobCategoriesOnJob: MutationResolvers['updateJobCategoriesOnJob'] =
  ({ id, input }) => {
    return db.jobCategoriesOnJob.update({
      data: input,
      where: { id },
    });
  };

export const deleteJobCategoriesOnJob: MutationResolvers['deleteJobCategoriesOnJob'] =
  ({ id }) => {
    return db.jobCategoriesOnJob.delete({
      where: { id },
    });
  };

export const JobCategoriesOnJob: JobCategoriesOnJobResolvers = {
  job: (_obj, { root }) =>
    db.jobCategoriesOnJob.findUnique({ where: { id: root.id } }).job(),
  category: (_obj, { root }) =>
    db.jobCategoriesOnJob.findUnique({ where: { id: root.id } }).category(),
};
