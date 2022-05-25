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
      input: { userAuthId: 'String', firstName: 'String', lastName: 'String' },
    });

    expect(result.userAuthId).toEqual('String');
    expect(result.firstName).toEqual('String');
    expect(result.lastName).toEqual('String');
  });

  scenario('updates a userInformation', async (scenario: StandardScenario) => {
    const original = await userInformation({
      id: scenario.userInformation.one.id,
    });
    const result = await updateUserInformation({
      id: original.id,
      input: { userAuthId: 'String2' },
    });

    expect(result.userAuthId).toEqual('String2');
  });

  scenario('deletes a userInformation', async (scenario: StandardScenario) => {
    const original = await deleteUserInformation({
      id: scenario.userInformation.one.id,
    });
    const result = await userInformation({ id: original.id });

    expect(result).toEqual(null);
  });
});
