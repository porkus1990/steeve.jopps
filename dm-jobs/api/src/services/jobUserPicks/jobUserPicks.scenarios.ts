import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.JobUserPickCreateArgs>({
  jobUserPick: {
    one: { data: { jobId: 5138000, userId: 'String' } },
    two: { data: { jobId: 1552274, userId: 'String' } },
  },
});

export type StandardScenario = typeof standard;
