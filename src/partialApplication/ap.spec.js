import ap from './ap'
import { equal } from 'assert'

describe('partialApplication / ap', () => {
  it('calls .ap of the second arg', () => {
    const apply = {
      ap: f => f('hello,'),
    }

    equal(ap(arg => arg + ' allright')(apply), 'hello, allright')
  })
})
