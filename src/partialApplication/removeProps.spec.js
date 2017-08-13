import removeProps from './removeProps'
import { equal } from 'assert'

describe('partialApplication / removeProps', () => {
  it('calls .removeProps of the second arg', () => {
    const reactDream = {
      removeProps: f => f('hello,'),
    }

    equal(removeProps(arg => arg + ' allright')(reactDream), 'hello, allright')
  })
})
