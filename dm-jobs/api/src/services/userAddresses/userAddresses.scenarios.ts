import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.UserAddressCreateArgs>({
  userAddress: {
    one: {
      data: {
        town: 'String',
        street: 'String',
        number: 'String',
        zipCode: 'String',
        userAuthId: 'String',
      },
    },
    two: {
      data: {
        town: 'String',
        street: 'String',
        number: 'String',
        zipCode: 'String',
        userAuthId: 'String',
      },
    },
  },
});

export type StandardScenario = typeof standard;
