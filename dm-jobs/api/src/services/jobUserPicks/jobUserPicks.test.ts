import {
  jobUserPicks,
  jobUserPick,
  createJobUserPick,
  updateJobUserPick,
  deleteJobUserPick,
} from './jobUserPicks';
import type { StandardScenario } from './jobUserPicks.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobUserPicks', () => {
  scenario('returns all jobUserPicks', async (scenario: StandardScenario) => {
    const result = await jobUserPicks();

    expect(result.length).toEqual(Object.keys(scenario.jobUserPick).length);
  });

  scenario(
    'returns a single jobUserPick',
    async (scenario: StandardScenario) => {
      const result = await jobUserPick({ id: scenario.jobUserPick.one.id });

      expect(result).toEqual(scenario.jobUserPick.one);
    }
  );

  scenario('creates a jobUserPick', async () => {
    const result = await createJobUserPick({
      input: { jobId: 2994607, userId: 'String' },
    });

    expect(result.jobId).toEqual(2994607);
    expect(result.userId).toEqual('String');
  });

  scenario('updates a jobUserPick', async (scenario: StandardScenario) => {
    const original = await jobUserPick({ id: scenario.jobUserPick.one.id });
    const result = await updateJobUserPick({
      id: original.id,
      input: { jobId: 4986878 },
    });

    expect(result.jobId).toEqual(4986878);
  });

  scenario('deletes a jobUserPick', async (scenario: StandardScenario) => {
    const original = await deleteJobUserPick({
      id: scenario.jobUserPick.one.id,
    });
    const result = await jobUserPick({ id: original.id });

    expect(result).toEqual(null);
  });
});
