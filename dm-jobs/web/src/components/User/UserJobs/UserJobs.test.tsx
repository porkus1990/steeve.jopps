import { render } from '@redwoodjs/testing/web';

import UserJobs from './UserJobs';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserJobs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserJobs />);
    }).not.toThrow();
  });
});
