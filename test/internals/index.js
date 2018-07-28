import { example, suite } from '../dsl'
import doMapSuite from './doMap'

export default suite(
  'internals',
  ...doMapSuite,
)
