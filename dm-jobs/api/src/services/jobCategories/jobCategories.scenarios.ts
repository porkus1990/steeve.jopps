import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.JobCategoryCreateArgs>({
  jobCategory: {
    one: { data: { type: 'String' } },
    two: { data: { type: 'String' } },
  },
});

export type StandardScenario = typeof standard;
