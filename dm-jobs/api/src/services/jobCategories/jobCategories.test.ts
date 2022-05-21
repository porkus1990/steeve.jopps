import {
  jobCategories,
  jobCategory,
  createJobCategory,
  updateJobCategory,
  deleteJobCategory,
} from './jobCategories';
import type { StandardScenario } from './jobCategories.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobCategories', () => {
  scenario('returns all jobCategories', async (scenario: StandardScenario) => {
    const result = await jobCategories();

    expect(result.length).toEqual(Object.keys(scenario.jobCategory).length);
  });

  scenario(
    'returns a single jobCategory',
    async (scenario: StandardScenario) => {
      const result = await jobCategory({ id: scenario.jobCategory.one.id });

      expect(result).toEqual(scenario.jobCategory.one);
    }
  );

  scenario('creates a jobCategory', async () => {
    const result = await createJobCategory({
      input: { type: 'String' },
    });

    expect(result.type).toEqual('String');
  });

  scenario('updates a jobCategory', async (scenario: StandardScenario) => {
    const original = await jobCategory({ id: scenario.jobCategory.one.id });
    const result = await updateJobCategory({
      id: original.id,
      input: { type: 'String2' },
    });

    expect(result.type).toEqual('String2');
  });

  scenario('deletes a jobCategory', async (scenario: StandardScenario) => {
    const original = await deleteJobCategory({
      id: scenario.jobCategory.one.id,
    });
    const result = await jobCategory({ id: original.id });

    expect(result).toEqual(null);
  });
});
