import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.UserInformationCreateArgs>({
  userInformation: {
    one: {
      data: {
        userAuthId: '123-456',
        firstName: 'name1',
        lastName: 'lastname1',
      },
    },
    two: {
      data: {
        userAuthId: '234-567',
        firstName: 'name2',
        lastName: 'lastname 2',
      },
    },
  },
});

export type StandardScenario = typeof standard;
