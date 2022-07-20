import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.JobCreateArgs>({
  job: {
    one: {
      data: {
        title: 'String',
        price: 2985555.149667831,
        longitude: 'String',
        latitude: 'String',
        threeWords: 'String',
        status: 'pending',
        categories: 'all',
        tags: 'car',
      },
    },
    two: {
      data: {
        title: 'String',
        price: 7245214.888675564,
        longitude: 'String',
        latitude: 'String',
        threeWords: 'String',
        status: 'pending',
        categories: 'all',
        tags: 'car',
      },
    },
  },
});

export type StandardScenario = typeof standard;
