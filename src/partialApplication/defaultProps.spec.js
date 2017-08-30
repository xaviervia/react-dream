import defaultProps from './defaultProps'
import { equal } from 'assert'

describe('partialApplication / defaultProps', () => {
  it('calls .defaultProps of the second arg', () => {
    const reactDream = {
      defaultProps: f => f('hello,'),
    }

    equal(defaultProps(arg => arg + ' allright')(reactDream), 'hello, allright')
  })
})
