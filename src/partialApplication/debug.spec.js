import debug from './debug'
import { equal } from 'assert'

describe('partialApplication / debug', () => {
  it('calls .debug of the second arg', () => {
    const reactDream = {
      debug: f => f('hello,'),
    }

    equal(debug(arg => arg + ' allright')(reactDream), 'hello, allright')
  })
})
