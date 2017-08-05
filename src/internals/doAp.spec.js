import doAp from './doAp'
import { equal } from 'assert'

describe('doAp', () => {
  it('passes the component to fork of the argument', () => {
    const argument = {
      fork: x => !x,
    }

    const component = false

    equal(doAp(component)(argument), true)
  })
})
