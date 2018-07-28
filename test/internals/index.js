import { example, suite } from '../dsl'
import doConcatSuite from './doConcat'
import doContramapSuite from './doContramap'
import doMapSuite from './doMap'
import doPromapSuite from './doPromap'

export default suite(
  'internals',
  ...doConcatSuite,
  ...doContramapSuite,
  ...doMapSuite,
  ...doPromapSuite
)
