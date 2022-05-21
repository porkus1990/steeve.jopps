import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.JobCategoriesOnJobCreateArgs>({
  jobCategoriesOnJob: {
    one: { data: { jobId: 9331784, categoryId: 9656033 } },
    two: { data: { jobId: 5883937, categoryId: 822852 } },
  },
});

export type StandardScenario = typeof standard;
