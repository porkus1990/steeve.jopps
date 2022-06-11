import type { Prisma } from '@prisma/client';
import { JobState as JobStateType } from '@prisma/client';

export const standard = defineScenario<Prisma.JobCreateArgs>({
  job: {
    one: {
      data: {
        title: 'first title',
        price: 7319315,
        longitude: '12.2',
        latitude: '12.3',
        threeWords: 'a.b.c',
        status: JobStateType.pending,
      },
    },
    two: {
      data: {
        title: 'second title',
        price: 7319315,
        longitude: '12.5',
        latitude: '12.6',
        threeWords: 'a.b.d',
        status: JobStateType.in_progress,
      },
    },
  },
});

export type StandardScenario = typeof standard;
