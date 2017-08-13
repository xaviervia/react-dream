import addProps from './addProps'
import { equal } from 'assert'

describe('partialApplication / addProps', () => {
  it('calls .addProps of the second arg', () => {
    const reactDream = {
      addProps: f => f('hello,'),
    }

    equal(addProps(arg => arg + ' allright')(reactDream), 'hello, allright')
  })
})
