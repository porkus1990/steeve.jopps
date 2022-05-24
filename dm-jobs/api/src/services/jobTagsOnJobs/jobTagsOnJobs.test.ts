import {
  jobTagsOnJobs,
  jobTagsOnJob,
  createJobTagsOnJob,
  updateJobTagsOnJob,
  deleteJobTagsOnJob,
} from './jobTagsOnJobs';
import type { StandardScenario } from './jobTagsOnJobs.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobTagsOnJobs', () => {
  scenario('returns all jobTagsOnJobs', async (scenario: StandardScenario) => {
    const result = await jobTagsOnJobs();

    expect(result.length).toEqual(Object.keys(scenario.jobTagsOnJob).length);
  });

  scenario(
    'returns a single jobTagsOnJob',
    async (scenario: StandardScenario) => {
      const result = await jobTagsOnJob({ id: scenario.jobTagsOnJob.one.id });

      expect(result).toEqual(scenario.jobTagsOnJob.one);
    }
  );

  scenario('creates a jobTagsOnJob', async (scenario: StandardScenario) => {
    const result = await createJobTagsOnJob({
      input: {
        jobId: scenario.jobTagsOnJob.two.jobId,
        jobTagId: scenario.jobTagsOnJob.two.jobTagId,
      },
    });

    expect(result.jobId).toEqual(scenario.jobTagsOnJob.two.jobId);
    expect(result.jobTagId).toEqual(scenario.jobTagsOnJob.two.jobTagId);
  });

  scenario('updates a jobTagsOnJob', async (scenario: StandardScenario) => {
    const original = await jobTagsOnJob({ id: scenario.jobTagsOnJob.one.id });
    const result = await updateJobTagsOnJob({
      id: original.id,
      input: { jobId: scenario.jobTagsOnJob.two.jobId },
    });

    expect(result.jobId).toEqual(scenario.jobTagsOnJob.two.jobId);
  });

  scenario('deletes a jobTagsOnJob', async (scenario: StandardScenario) => {
    const original = await deleteJobTagsOnJob({
      id: scenario.jobTagsOnJob.one.id,
    });
    const result = await jobTagsOnJob({ id: original.id });

    expect(result).toEqual(null);
  });
});
