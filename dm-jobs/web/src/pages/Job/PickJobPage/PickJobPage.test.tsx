import { render } from '@redwoodjs/testing/web';

import PickJobPage from './PickJobPage';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PickJobPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PickJobPage />);
    }).not.toThrow();
  });
});
