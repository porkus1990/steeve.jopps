import { render } from '@redwoodjs/testing/web';

import { mock as jobsNotPickedMock } from 'src/__mocks__/jobsNotPicked.mock';

import Map from './Map';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

global.google = {
  maps: {
    Maps: () => {},
  },
};

describe('Map', () => {
  it('renders successfully', () => {
    mockGraphQLQuery('FindJobs', () => ({
      ...jobsNotPickedMock,
    }));
    expect(() => {
      render(<Map />);
    }).not.toThrow();
  });
});
