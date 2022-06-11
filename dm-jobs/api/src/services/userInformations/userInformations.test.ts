import {
  userInformations,
  userInformation,
  createUserInformation,
  updateUserInformation,
  deleteUserInformation,
} from './userInformations';
import type { StandardScenario } from './userInformations.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userInformations', () => {
  scenario(
    'returns all userInformations',
    async (scenario: StandardScenario) => {
      const result = await userInformations();

      expect(result.length).toEqual(
        Object.keys(scenario.userInformation).length
      );
    }
  );

  scenario(
    'returns a single userInformation',
    async (scenario: StandardScenario) => {
      const result = await userInformation({
        id: scenario.userInformation.one.id,
      });

      expect(result).toEqual(scenario.userInformation.one);
    }
  );

  scenario('creates a userInformation', async () => {
    const result = await createUserInformation({
      input: {
        userAuthId: '222-333',
        firstName: 'namename',
        lastName: 'lastnamaname',
      },
    });

    expect(result.userAuthId).toEqual('222-333');
    expect(result.firstName).toEqual('namename');
    expect(result.lastName).toEqual('lastnamaname');
  });

  scenario('updates a userInformation', async (scenario: StandardScenario) => {
    const original = await userInformation({
      id: scenario.userInformation.one.id,
    });
    const result = await updateUserInformation({
      id: original.id,
      input: { userAuthId: '123-456' },
    });

    expect(result.userAuthId).toEqual('123-456');
  });

  scenario('deletes a userInformation', async (scenario: StandardScenario) => {
    const original = await deleteUserInformation({
      id: scenario.userInformation.one.id,
    });
    const result = await userInformation({ id: original.id });

    expect(result).toEqual(null);
  });
});
