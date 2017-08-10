import log from './log'
import { equal } from 'assert'

describe('partialApplication / log', () => {
  it('calls .log of the second arg', () => {
    const reactDream = {
      log: f => f('hello,'),
    }

    equal(log(arg => arg + ' allright')(reactDream), 'hello, allright')
  })
})
