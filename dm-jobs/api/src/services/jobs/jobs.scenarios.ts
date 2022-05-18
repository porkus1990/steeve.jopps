import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.JobCreateArgs>({
  job: {
    one: {
      data: {
        title: 'String',
        price: 5355560,
        longitude: 'String',
        latitude: 'String',
        threeWords: 'String',
        status: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        price: 8940464,
        longitude: 'String',
        latitude: 'String',
        threeWords: 'String',
        status: 'String',
      },
    },
  },
});

export type StandardScenario = typeof standard;
