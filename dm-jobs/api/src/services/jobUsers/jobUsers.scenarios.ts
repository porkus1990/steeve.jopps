import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.JobUserCreateArgs>({
  jobUser: {
    one: { data: { jobId: 3807592, userId: 'String' } },
    two: { data: { jobId: 6394124, userId: 'String' } },
  },
});

export type StandardScenario = typeof standard;
