import { db } from 'src/lib/db';
import type {
  QueryResolvers,
  MutationResolvers,
  JobCategoryResolvers,
} from 'types/graphql';

export const jobCategories: QueryResolvers['jobCategories'] = () => {
  return db.jobCategory.findMany();
};

export const jobCategory: QueryResolvers['jobCategory'] = ({ id }) => {
  return db.jobCategory.findUnique({
    where: { id },
  });
};

export const createJobCategory: MutationResolvers['createJobCategory'] = ({
  input,
}) => {
  return db.jobCategory.create({
    data: input,
  });
};

export const updateJobCategory: MutationResolvers['updateJobCategory'] = ({
  id,
  input,
}) => {
  return db.jobCategory.update({
    data: input,
    where: { id },
  });
};

export const deleteJobCategory: MutationResolvers['deleteJobCategory'] = ({
  id,
}) => {
  return db.jobCategory.delete({
    where: { id },
  });
};

export const JobCategory: JobCategoryResolvers = {
  jobs: (_obj, { root }) =>
    db.jobCategory.findUnique({ where: { id: root.id } }).jobs(),
};
