import chain from './chain'
import { equal } from 'assert'

describe('partialApplication / chain', () => {
  it('calls .chain of the second arg', () => {
    const chainable = {
      chain: f => f('hello,'),
    }

    equal(chain(arg => arg + ' allright')(chainable), 'hello, allright')
  })
})
