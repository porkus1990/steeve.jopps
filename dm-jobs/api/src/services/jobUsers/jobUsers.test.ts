import {
  jobUsers,
  jobUser,
  createJobUser,
  updateJobUser,
  deleteJobUser,
} from './jobUsers';
import type { StandardScenario } from './jobUsers.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobUsers', () => {
  scenario('returns all jobUsers', async (scenario: StandardScenario) => {
    const result = await jobUsers();

    expect(result.length).toEqual(Object.keys(scenario.jobUser).length);
  });

  scenario('returns a single jobUser', async (scenario: StandardScenario) => {
    const result = await jobUser({ id: scenario.jobUser.one.id });

    expect(result).toEqual(scenario.jobUser.one);
  });

  scenario('creates a jobUser', async () => {
    const result = await createJobUser({
      input: { jobId: 8895832, userId: 'String' },
    });

    expect(result.jobId).toEqual(8895832);
    expect(result.userId).toEqual('String');
  });

  scenario('updates a jobUser', async (scenario: StandardScenario) => {
    const original = await jobUser({ id: scenario.jobUser.one.id });
    const result = await updateJobUser({
      id: original.id,
      input: { jobId: 2083970 },
    });

    expect(result.jobId).toEqual(2083970);
  });

  scenario('deletes a jobUser', async (scenario: StandardScenario) => {
    const original = await deleteJobUser({ id: scenario.jobUser.one.id });
    const result = await jobUser({ id: original.id });

    expect(result).toEqual(null);
  });
});
