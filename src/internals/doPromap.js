import compose from 'recompose/compose'
import doContramap from './doContramap'
import doMap from './doMap'

// doPromap : ((a -> Props), (Component -> Component)) -> Component -> Component
export default (propsPreprocessor, higherOrderComponent) =>
  compose(doMap(higherOrderComponent), doContramap(propsPreprocessor))
