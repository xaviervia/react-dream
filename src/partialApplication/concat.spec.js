import concat from './concat'
import { equal } from 'assert'

describe('partialApplication / concat', () => {
  it('calls .concat of the second arg', () => {
    const semigroup = {
      concat: f => f('hello,'),
    }

    equal(concat(arg => arg + ' allright')(semigroup), 'hello, allright')
  })
})
