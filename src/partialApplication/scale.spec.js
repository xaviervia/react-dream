import scale from './scale'
import { equal } from 'assert'

describe('partialApplication / scale', () => {
  it('calls .scale of the second arg', () => {
    const reactDream = {
      scale: f => f('hello,'),
    }

    equal(scale(arg => arg + ' allright')(reactDream), 'hello, allright')
  })
})
