import { jobs, job, createJob, updateJob, deleteJob } from './jobs';
import type { StandardScenario } from './jobs.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobs', () => {
  scenario('returns all jobs', async (scenario: StandardScenario) => {
    const result = await jobs();

    expect(result.length).toEqual(Object.keys(scenario.job).length);
  });

  scenario('returns a single job', async (scenario: StandardScenario) => {
    const result = await job({ id: scenario.job.one.id });

    expect(result).toEqual(scenario.job.one);
  });

  scenario('creates a job', async () => {
    const result = await createJob({
      input: {
        title: 'String',
        price: 7126381.784424101,
        longitude: 'String',
        latitude: 'String',
        threeWords: 'String',
        status: 'pending',
        categories: ['all'],
        tags: ['car'],
      },
    });

    expect(result.title).toEqual('String');
    expect(result.price).toEqual(7126381.784424101);
    expect(result.longitude).toEqual('String');
    expect(result.latitude).toEqual('String');
    expect(result.threeWords).toEqual('String');
    expect(result.status).toEqual('pending');
    expect(result.categories).toEqual(['all']);
    expect(result.tags).toEqual(['car']);
  });

  scenario('updates a job', async (scenario: StandardScenario) => {
    const original = await job({ id: scenario.job.one.id });
    const result = await updateJob({
      id: original.id,
      input: { title: 'String2' },
    });

    expect(result.title).toEqual('String2');
  });

  scenario('deletes a job', async (scenario: StandardScenario) => {
    const original = await deleteJob({ id: scenario.job.one.id });
    const result = await job({ id: original.id });

    expect(result).toEqual(null);
  });
});
