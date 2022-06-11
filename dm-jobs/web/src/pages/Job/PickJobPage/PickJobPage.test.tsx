import { render } from '@redwoodjs/testing/web';

import { mock as jobsNotPickedMock } from 'src/__mocks__/jobsNotPicked.mock';

import PickJobPage from './PickJobPage';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PickJobPage', () => {
  it('renders successfully', () => {
    mockGraphQLQuery('FindJobs', () => ({
      ...jobsNotPickedMock,
    }));
    expect(() => {
      render(<PickJobPage />);
    }).not.toThrow();
  });
});
