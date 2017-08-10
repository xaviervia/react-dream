import name from './name'
import { equal } from 'assert'

describe('partialApplication / name', () => {
  it('calls .name of the second arg', () => {
    const reactDream = {
      name: f => f('hello,'),
    }

    equal(name(arg => arg + ' allright')(reactDream), 'hello, allright')
  })
})
