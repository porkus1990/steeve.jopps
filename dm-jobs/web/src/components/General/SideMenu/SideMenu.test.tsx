import { render } from '@redwoodjs/testing/web'

import SideMenu from './SideMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SideMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SideMenu />)
    }).not.toThrow()
  })
})
