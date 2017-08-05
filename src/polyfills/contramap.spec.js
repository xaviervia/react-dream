import contramap from './contramap'
import { equal } from 'assert'

describe('polyfills / contramap', () => {
  it('calls .contramap of the second arg', () => {
    const contravariant = {
      contramap: f => f('hello,'),
    }

    equal(contramap(arg => arg + ' allright', contravariant), 'hello, allright')
  })

  describe('ensure curried', () => {
    const contravariant = {
      contramap: f => f('hello,'),
    }

    equal(contramap(arg => arg + ' allright')(contravariant), 'hello, allright')
  })
})
