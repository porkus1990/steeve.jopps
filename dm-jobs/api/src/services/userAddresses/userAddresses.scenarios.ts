import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.UserAddressCreateArgs>({
  userAddress: {
    one: {
      data: {
        town: 'String',
        street: 'String',
        number: 'String',
        zipCode: 'String',
        userId: 1968040,
      },
    },
    two: {
      data: {
        town: 'String',
        street: 'String',
        number: 'String',
        zipCode: 'String',
        userId: 429124,
      },
    },
  },
});

export type StandardScenario = typeof standard;
