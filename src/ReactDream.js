import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import doAp from './internals/doAp'
import doContramap from './internals/doContramap'
import doMap from './internals/doMap'
import styleFromProps from './styleFromProps'

// ALGEBRAS
// ////////////////////////////////////////////////////////////////////////// //

// ap : higherOrderComponent -> ReactDream -> ReactDream
const ap = higherOrderComponent => ReactDreamComponent =>
  ReactDream(doAp(higherOrderComponent)(ReactDreamComponent))

// chain : Component -> (Component -> ReactDream) -> ReactDream
const chain = Component => kleisliReactDreamComponent => kleisliReactDreamComponent(Component)

// map : Component -> (Component -> Component) -> ReactDream
const map = Component => higherOrderComponent => ReactDream(doMap(higherOrderComponent)(Component))

// contramap : Component -> (a -> Props) -> ReactDream
const contramap = Component => propsPreprocessor =>
  ReactDream(doContramap(propsPreprocessor)(Component))

// CUSTOM HELPERS
// ////////////////////////////////////////////////////////////////////////// //

// addProps : Component -> (Props -> Props) -> ReactDream
const addProps = Component => getPropsToAdd =>
  contramap(Component)(props => ({
    ...getPropsToAdd(props),
    ...props,
  }))

// fork : Component -> (Component -> a) -> a
const fork = Component => extractComponent => extractComponent(Component)

// name : Component -> String -> ReactDream
const name = Component => compose(map(Component), setDisplayName)

// removeProps : Component -> (...Array) -> ReactDream
const removeProps = Component => (...propsToRemove) =>
  contramap(Component)(props => {
    // Nasty but efficient
    const propsCopy = { ...props }
    propsToRemove.forEach(propName => {
      delete propsCopy[propName]
    })
    return propsCopy
  })

// style : Component -> (Props -> Style) -> ReactDream
const style = Component => getStyleFromProps =>
  contramap(Component)(styleFromProps(getStyleFromProps))

// TYPE
// ////////////////////////////////////////////////////////////////////////// //

// ReactDream : Component -> ReactDream
const ReactDream = Component => ({
  Component,

  // Algebras
  ap: ap(Component),
  chain: chain(Component),
  contramap: contramap(Component),
  map: map(Component),

  // Custom helpers
  addProps: addProps(Component),
  fork: fork(Component),
  name: name(Component),
  removeProps: removeProps(Component),
  style: style(Component),
})

ReactDream.of = ReactDream

export const of = ReactDream.of

export default ReactDream
