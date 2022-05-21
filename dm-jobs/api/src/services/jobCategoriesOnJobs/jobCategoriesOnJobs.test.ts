import {
  jobCategoriesOnJobs,
  jobCategoriesOnJob,
  createJobCategoriesOnJob,
  updateJobCategoriesOnJob,
  deleteJobCategoriesOnJob,
} from './jobCategoriesOnJobs';
import type { StandardScenario } from './jobCategoriesOnJobs.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobCategoriesOnJobs', () => {
  scenario(
    'returns all jobCategoriesOnJobs',
    async (scenario: StandardScenario) => {
      const result = await jobCategoriesOnJobs();

      expect(result.length).toEqual(
        Object.keys(scenario.jobCategoriesOnJob).length
      );
    }
  );

  scenario(
    'returns a single jobCategoriesOnJob',
    async (scenario: StandardScenario) => {
      const result = await jobCategoriesOnJob({
        id: scenario.jobCategoriesOnJob.one.id,
      });

      expect(result).toEqual(scenario.jobCategoriesOnJob.one);
    }
  );

  scenario('creates a jobCategoriesOnJob', async () => {
    const result = await createJobCategoriesOnJob({
      input: { jobId: 374102, categoryId: 6836462 },
    });

    expect(result.jobId).toEqual(374102);
    expect(result.categoryId).toEqual(6836462);
  });

  scenario(
    'updates a jobCategoriesOnJob',
    async (scenario: StandardScenario) => {
      const original = await jobCategoriesOnJob({
        id: scenario.jobCategoriesOnJob.one.id,
      });
      const result = await updateJobCategoriesOnJob({
        id: original.id,
        input: { jobId: 7898343 },
      });

      expect(result.jobId).toEqual(7898343);
    }
  );

  scenario(
    'deletes a jobCategoriesOnJob',
    async (scenario: StandardScenario) => {
      const original = await deleteJobCategoriesOnJob({
        id: scenario.jobCategoriesOnJob.one.id,
      });
      const result = await jobCategoriesOnJob({ id: original.id });

      expect(result).toEqual(null);
    }
  );
});
