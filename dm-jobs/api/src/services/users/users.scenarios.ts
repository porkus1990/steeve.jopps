import type { Prisma } from '@prisma/client';
import { AccountType as AccountTypeType } from '@prisma/client';

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        userId: '89234753',
        accountType: AccountTypeType.execute,
        rating: 2,
      },
    },
    two: {
      data: {
        userId: 'sdgjdfghd',
        accountType: AccountTypeType.provide,
        rating: 0,
      },
    },
  },
});

export type StandardScenario = typeof standard;
