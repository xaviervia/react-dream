import propTypes from './propTypes'
import { equal } from 'assert'

describe('partialApplication / propTypes', () => {
  it('calls .propTypes of the second arg', () => {
    const component = {
      propTypes: f => f('hello,'),
    }

    equal(propTypes(arg => arg + ' allright')(component), 'hello, allright')
  })
})
