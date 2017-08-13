import promap from './promap'
import { equal } from 'assert'

describe('partialApplication / promap', () => {
  it('calls .promap of the second arg', () => {
    const profuctor = {
      promap: f => f('hello,', 'there'),
    }

    equal(promap((arg1, arg2) => arg1 + ' allright ' + arg2)(profuctor), 'hello, allright there')
  })
})
