import translate from './translate'
import { equal } from 'assert'

describe('partialApplication / translate', () => {
  it('calls .translate of the second arg', () => {
    const reactDream = {
      translate: f => f('hello,'),
    }

    equal(translate(arg => arg + ' allright')(reactDream), 'hello, allright')
  })
})
