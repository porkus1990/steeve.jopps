import {
  jobTags,
  jobTag,
  createJobTag,
  updateJobTag,
  deleteJobTag,
} from './jobTags';
import type { StandardScenario } from './jobTags.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobTags', () => {
  scenario('returns all jobTags', async (scenario: StandardScenario) => {
    const result = await jobTags();

    expect(result.length).toEqual(Object.keys(scenario.jobTag).length);
  });

  scenario('returns a single jobTag', async (scenario: StandardScenario) => {
    const result = await jobTag({ id: scenario.jobTag.one.id });

    expect(result).toEqual(scenario.jobTag.one);
  });

  scenario('creates a jobTag', async () => {
    const result = await createJobTag({
      input: { name: 'String', description: 'String' },
    });

    expect(result.name).toEqual('String');
    expect(result.description).toEqual('String');
  });

  scenario('updates a jobTag', async (scenario: StandardScenario) => {
    const original = await jobTag({ id: scenario.jobTag.one.id });
    const result = await updateJobTag({
      id: original.id,
      input: { name: 'String2' },
    });

    expect(result.name).toEqual('String2');
  });

  scenario('deletes a jobTag', async (scenario: StandardScenario) => {
    const original = await deleteJobTag({ id: scenario.jobTag.one.id });
    const result = await jobTag({ id: original.id });

    expect(result).toEqual(null);
  });
});
