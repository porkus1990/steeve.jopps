import type { Prisma } from '@prisma/client';
import { AccountType as AccountTypeType } from '@prisma/client';

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { userId: 'String', accountType: AccountTypeType.execute } },
    two: { data: { userId: 'String', accountType: AccountTypeType.provide } },
  },
});

export type StandardScenario = typeof standard;
