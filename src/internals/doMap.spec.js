import doMap from './doMap'
import {equal} from 'assert'

describe('doMap', function() {
  it('run the component through the higher-order component', () => {
    const Component = 1
    const higherOrderComponent = x => x + 1

    equal(doMap(higherOrderComponent)(Component), 2)
  })
})
