import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { userId: 'String' } },
    two: { data: { userId: 'String' } },
  },
});

export type StandardScenario = typeof standard;
