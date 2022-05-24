import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.JobTagsOnJobCreateArgs>({
  jobTagsOnJob: {
    one: {
      data: {
        job: {
          create: {
            title: 'String',
            price: 9120381,
            longitude: 'String',
            latitude: 'String',
            threeWords: 'String',
            status: 'String',
          },
        },
        tag: { create: { name: 'String', description: 'String' } },
      },
    },
    two: {
      data: {
        job: {
          create: {
            title: 'String',
            price: 612652,
            longitude: 'String',
            latitude: 'String',
            threeWords: 'String',
            status: 'String',
          },
        },
        tag: { create: { name: 'String', description: 'String' } },
      },
    },
  },
});

export type StandardScenario = typeof standard;
