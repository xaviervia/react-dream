import doAp from '../../src/internals/doAp'
import { example, suite } from '../dsl'

export default suite(
  'doAp',
  example(
    'passes the component to fork of the argument',

    () => doAp(false)({
      fork: x => !x,
    }),

    true
  )
)
