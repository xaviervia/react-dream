import { example, suite } from '../dsl'
import doApSuite from './doAp'
import doConcatSuite from './doConcat'
import doContramapSuite from './doContramap'
import doMapSuite from './doMap'
import doPromapSuite from './doPromap'

export default suite(
  'internals',
  ...doApSuite,
  ...doConcatSuite,
  ...doContramapSuite,
  ...doMapSuite,
  ...doPromapSuite
)
