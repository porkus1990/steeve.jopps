import { render } from '@redwoodjs/testing/web'

import UserAddresses from './UserAddresses'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserAddresses', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserAddresses />)
    }).not.toThrow()
  })
})
