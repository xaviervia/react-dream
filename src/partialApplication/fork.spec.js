import fork from './fork'
import { equal } from 'assert'

describe('partialApplication / fork', () => {
  it('calls .fork of the second arg', () => {
    const reactDream = {
      fork: f => f('hello,'),
    }

    equal(fork(arg => arg + ' allright')(reactDream), 'hello, allright')
  })
})
