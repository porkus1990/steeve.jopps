import { db } from 'src/lib/db';
import type { QueryResolvers, MutationResolvers } from 'types/graphql';

export const userAddresses: QueryResolvers['userAddresses'] = () => {
  return db.userAddress.findMany();
};

export const userAddress: QueryResolvers['userAddress'] = ({ id }) => {
  return db.userAddress.findUnique({
    where: { id },
  });
};

export const createUserAddress: MutationResolvers['createUserAddress'] = ({
  input,
}) => {
  return db.userAddress.create({
    data: input,
  });
};

export const updateUserAddress: MutationResolvers['updateUserAddress'] = ({
  id,
  input,
}) => {
  return db.userAddress.update({
    data: input,
    where: { id },
  });
};

export const deleteUserAddress: MutationResolvers['deleteUserAddress'] = ({
  id,
}) => {
  return db.userAddress.delete({
    where: { id },
  });
};
