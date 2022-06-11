import { render } from '@redwoodjs/testing/web';

import UserJobs from './UserJobs';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
    };
  },
}));

describe('UserJobs', () => {
  it('renders successfully', () => {
    mockGraphQLQuery('jobUsersByUser', () => ({
      jobUsersByUser: [1, 2],
    }));

    expect(async () => {
      mockCurrentUser({ sub: '123-456' });
      await render(<UserJobs />);
    }).not.toThrow();
  });
});
