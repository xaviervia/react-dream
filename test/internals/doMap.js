import doMap from '../../src/internals/doMap'
import { example, suite } from '../dsl'

export default suite(
  'doMap',
  example(
    'run the component through the higher-order component',

    () => {
      const Component = 1
      const higherOrderComponent = x => x + 1

      return doMap(higherOrderComponent)(Component)
    },

    2
  )
)
