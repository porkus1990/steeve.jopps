import { db } from 'src/lib/db';
import type {
  QueryResolvers,
  MutationResolvers,
  JobTagResolvers,
} from 'types/graphql';

export const jobTags: QueryResolvers['jobTags'] = () => {
  return db.jobTag.findMany();
};

export const jobTag: QueryResolvers['jobTag'] = ({ id }) => {
  return db.jobTag.findUnique({
    where: { id },
  });
};

export const createJobTag: MutationResolvers['createJobTag'] = ({ input }) => {
  return db.jobTag.create({
    data: input,
  });
};

export const updateJobTag: MutationResolvers['updateJobTag'] = ({
  id,
  input,
}) => {
  return db.jobTag.update({
    data: input,
    where: { id },
  });
};

export const deleteJobTag: MutationResolvers['deleteJobTag'] = ({ id }) => {
  return db.jobTag.delete({
    where: { id },
  });
};

export const JobTag: JobTagResolvers = {
  jobs: (_obj, { root }) =>
    db.jobTag.findUnique({ where: { id: root.id } }).jobs(),
};
