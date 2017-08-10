import rotate from './rotate'
import { equal } from 'assert'

describe('partialApplication / rotate', () => {
  it('calls .rotate of the second arg', () => {
    const reactDream = {
      rotate: f => f('hello,'),
    }

    equal(rotate(arg => arg + ' allright')(reactDream), 'hello, allright')
  })
})
