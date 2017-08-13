import map from './map'
import { equal } from 'assert'

describe('partialApplication / map', () => {
  it('calls .map of the second arg', () => {
    const functor = {
      map: f => f('hello,'),
    }

    equal(map(arg => arg + ' allright')(functor), 'hello, allright')
  })
})
