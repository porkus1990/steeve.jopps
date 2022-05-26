import {
  userAddresses,
  userAddress,
  createUserAddress,
  updateUserAddress,
  deleteUserAddress,
} from './userAddresses';
import type { StandardScenario } from './userAddresses.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userAddresses', () => {
  scenario('returns all userAddresses', async (scenario: StandardScenario) => {
    const result = await userAddresses();

    expect(result.length).toEqual(Object.keys(scenario.userAddress).length);
  });

  scenario(
    'returns a single userAddress',
    async (scenario: StandardScenario) => {
      const result = await userAddress({ id: scenario.userAddress.one.id });

      expect(result).toEqual(scenario.userAddress.one);
    }
  );

  scenario('creates a userAddress', async () => {
    const result = await createUserAddress({
      input: {
        town: 'String',
        street: 'String',
        number: 'String',
        zipCode: 'String',
        userAuthId: 'String',
      },
    });

    expect(result.town).toEqual('String');
    expect(result.street).toEqual('String');
    expect(result.number).toEqual('String');
    expect(result.zipCode).toEqual('String');
    expect(result.userAuthId).toEqual('String');
  });

  scenario('updates a userAddress', async (scenario: StandardScenario) => {
    const original = await userAddress({ id: scenario.userAddress.one.id });
    const result = await updateUserAddress({
      id: original.id,
      input: { town: 'String2' },
    });

    expect(result.town).toEqual('String2');
  });

  scenario('deletes a userAddress', async (scenario: StandardScenario) => {
    const original = await deleteUserAddress({
      id: scenario.userAddress.one.id,
    });
    const result = await userAddress({ id: original.id });

    expect(result).toEqual(null);
  });
});
