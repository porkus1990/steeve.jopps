import { AccountType as AccountTypeType } from '@prisma/client';

import { users, user, createUser, updateUser, deleteUser } from './users';
import type { StandardScenario } from './users.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('users', () => {
  scenario('returns all users', async (scenario: StandardScenario) => {
    const result = await users();

    expect(result.length).toEqual(Object.keys(scenario.user).length);
  });

  scenario('returns a single user', async (scenario: StandardScenario) => {
    const result = await user({ id: scenario.user.one.id });

    expect(result).toEqual(scenario.user.one);
  });

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        userId: 'String1',
        accountType: AccountTypeType.execute,
        rating: 0,
      },
    });

    expect(result.userId).toEqual('String1');
  });

  scenario('updates a user', async (scenario: StandardScenario) => {
    const original = await user({ id: scenario.user.one.id });
    const result = await updateUser({
      id: original.id,
      input: { userId: 'String2' },
    });

    expect(result.userId).toEqual('String2');
  });

  scenario('deletes a user', async (scenario: StandardScenario) => {
    const original = await deleteUser({ id: scenario.user.one.id });
    const result = await user({ id: original.id });

    expect(result).toEqual(null);
  });
});
