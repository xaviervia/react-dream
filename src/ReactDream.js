import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import doMap from './internals/doMap'

// map : Component -> (Component -> Component) -> ReactDream
const map = Component => higherOrderComponent => ReactDream(doMap(higherOrderComponent)(Component))

// fork : Component -> (Component -> a) -> a
const fork = Component => extractComponent => extractComponent(Component)

// ReactDream : Component -> ReactDream
const ReactDream = Component => ({
  Component,
  map: map(Component),
  fork: fork(Component),
  name: compose(map(Component), setDisplayName),
})

export default ReactDream
