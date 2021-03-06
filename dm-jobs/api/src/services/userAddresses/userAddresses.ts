import type { QueryResolvers, MutationResolvers } from 'types/graphql';

import { db } from 'src/lib/db';

export const userAddresses: QueryResolvers['userAddresses'] = () => {
  return db.userAddress.findMany();
};

export const userAddressesByUserAuth: QueryResolvers['userAddressesByUserAuth'] =
  ({ userAuthId }) => {
    return db.userAddress.findMany({
      where: { userAuthId },
    });
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
