import type { QueryResolvers, MutationResolvers } from 'types/graphql';

import { db } from 'src/lib/db';

export const userInformations: QueryResolvers['userInformations'] = () => {
  return db.userInformation.findMany();
};

export const userInformation: QueryResolvers['userInformation'] = ({ id }) => {
  return db.userInformation.findUnique({
    where: { id },
  });
};

export const userInformationAuthId: QueryResolvers['userInformationAuthId'] = ({
  userAuthId,
}) => {
  return db.userInformation.findUnique({
    where: { userAuthId },
  });
};

export const createUserInformation: MutationResolvers['createUserInformation'] =
  ({ input }) => {
    return db.userInformation.create({
      data: input,
    });
  };

export const updateUserInformation: MutationResolvers['updateUserInformation'] =
  ({ id, input }) => {
    return db.userInformation.update({
      data: input,
      where: { id },
    });
  };

export const deleteUserInformation: MutationResolvers['deleteUserInformation'] =
  ({ id }) => {
    return db.userInformation.delete({
      where: { id },
    });
  };
