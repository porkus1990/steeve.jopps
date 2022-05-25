import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.JobCreateArgs>({
  job: {
    one: {
      data: {
        title: 'String',
        price: 7319315,
        longitude: 'String',
        latitude: 'String',
        threeWords: 'String',
        status: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        price: 6457299,
        longitude: 'String',
        latitude: 'String',
        threeWords: 'String',
        status: 'String',
      },
    },
  },
});

export type StandardScenario = typeof standard;
