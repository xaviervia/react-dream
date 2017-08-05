import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import doContramap from './internals/doContramap'
import doMap from './internals/doMap'
import styleFromProps from './styleFromProps'

// map : Component -> (Component -> Component) -> ReactDream
const map = Component => higherOrderComponent => ReactDream(doMap(higherOrderComponent)(Component))

// contramap : Component -> (a -> Props) -> ReactDream
const contramap = Component => propsPreprocessor =>
  ReactDream(doContramap(propsPreprocessor)(Component))

// fork : Component -> (Component -> a) -> a
const fork = Component => extractComponent => extractComponent(Component)

// style : Component -> (Props -> Style) -> ReactDream
const style = Component => getStyleFromProps =>
  contramap(Component)(styleFromProps(getStyleFromProps))

// ReactDream : Component -> ReactDream
const ReactDream = Component => ({
  Component,
  map: map(Component),
  contramap: contramap(Component),
  fork: fork(Component),
  name: compose(map(Component), setDisplayName),
  style: style(Component),
})

export const of = (ReactDream.of = ReactDream)

export default ReactDream
