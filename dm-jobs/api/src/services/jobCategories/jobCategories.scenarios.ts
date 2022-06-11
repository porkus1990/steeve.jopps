import type { Prisma } from '@prisma/client';
import { JobCategory as JobCategoryType } from '@prisma/client';

export const standard = defineScenario<Prisma.JobCategoryCreateArgs>({
  jobCategory: {
    one: { data: { type: JobCategoryType.buying } },
    two: { data: { type: JobCategoryType.delivery } },
  },
});

export type StandardScenario = typeof standard;
