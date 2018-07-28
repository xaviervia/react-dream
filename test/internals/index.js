import { example, suite } from '../dsl'
import doContramapSuite from './doContramap'
import doMapSuite from './doMap'
import doPromapSuite from './doPromap'

export default suite(
  'internals',
  ...doContramapSuite,
  ...doMapSuite,
  ...doPromapSuite
)
