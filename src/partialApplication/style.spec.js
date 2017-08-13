import style from './style'
import { equal } from 'assert'

describe('partialApplication / style', () => {
  it('calls .style of the second arg', () => {
    const reactDream = {
      style: f => f('hello,'),
    }

    equal(style(arg => arg + ' allright')(reactDream), 'hello, allright')
  })
})
