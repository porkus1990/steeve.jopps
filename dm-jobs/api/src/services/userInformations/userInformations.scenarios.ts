import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.UserInformationCreateArgs>({
  userInformation: {
    one: {
      data: { userAuthId: 'String', firstName: 'String', lastName: 'String' },
    },
    two: {
      data: { userAuthId: 'String', firstName: 'String', lastName: 'String' },
    },
  },
});

export type StandardScenario = typeof standard;
