import { db } from 'src/lib/db';
import type {
  QueryResolvers,
  MutationResolvers,
  JobTagsOnJobResolvers,
} from 'types/graphql';

export const jobTagsOnJobs: QueryResolvers['jobTagsOnJobs'] = () => {
  return db.jobTagsOnJob.findMany();
};

export const jobTagsOnJob: QueryResolvers['jobTagsOnJob'] = ({ id }) => {
  return db.jobTagsOnJob.findUnique({
    where: { id },
  });
};

export const createJobTagsOnJob: MutationResolvers['createJobTagsOnJob'] = ({
  input,
}) => {
  return db.jobTagsOnJob.create({
    data: input,
  });
};

export const updateJobTagsOnJob: MutationResolvers['updateJobTagsOnJob'] = ({
  id,
  input,
}) => {
  return db.jobTagsOnJob.update({
    data: input,
    where: { id },
  });
};

export const deleteJobTagsOnJob: MutationResolvers['deleteJobTagsOnJob'] = ({
  id,
}) => {
  return db.jobTagsOnJob.delete({
    where: { id },
  });
};

export const JobTagsOnJob: JobTagsOnJobResolvers = {
  job: (_obj, { root }) =>
    db.jobTagsOnJob.findUnique({ where: { id: root.id } }).job(),
  tag: (_obj, { root }) =>
    db.jobTagsOnJob.findUnique({ where: { id: root.id } }).tag(),
};
