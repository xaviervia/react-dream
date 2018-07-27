import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import recomposeDefaultProps from 'recompose/defaultProps'
import setPropTypes from 'recompose/setPropTypes'
import withDebugger from '@hocs/with-debugger'
import withLog from '@hocs/with-log'
import doAp from './internals/doAp'
import doConcat from './internals/doConcat'
import doStatefulContramap from './internals/stateful/doContramap'
import doStatelessContramap from './internals/stateless/doContramap'
import doMap from './internals/doMap'
import doPromap from './internals/doPromap'
import doRotate from './internals/doRotate'
import doTranslate from './internals/doTranslate'
import doScale from './internals/doScale'
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

// concat : Component -> Component -> ReactDream
const concat = Component => OtherComponent =>
  ReactDream(doConcat(OtherComponent.Component)(Component))

// statelessContramap : Component -> (a -> Props) -> ReactDream
const statelessContramap = Component => propsPreprocessor =>
  ReactDream(doStatelessContramap(propsPreprocessor)(Component))

// statefulContramap : Component -> (a -> Props) -> ReactDream
const statefulContramap = Component => propsPreprocessor =>
  ReactDream(doStatefulContramap(propsPreprocessor)(Component))

// promap : Component -> (a -> Props) -> (Component -> Component) -> ReactDream
const promap = Component => (propsPreprocessor, higherOrderComponent) =>
  ReactDream(doPromap(propsPreprocessor, higherOrderComponent)(Component))

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

// debug : Component -> () -> IO ReactDream
const debug = Component => () => ReactDream(withDebugger(Component))

// defaultProps : Component -> (Props) -> ReactDream
const defaultProps = Component => props => ReactDream(recomposeDefaultProps(props)(Component))

// log : Component -> (Props -> String) -> IO ReactDream
const log = Component => messageFromProps => ReactDream(withLog(messageFromProps)(Component))

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

// propTypes : Component -> (PropTypes) -> ReactDream
const propTypes = Component => propTypesToSet => ReactDream(setPropTypes(propTypesToSet)(Component))

// translate : Component -> (Props -> [Number]) -> ReactDream
const translate = Component => getTranslateFromProps =>
  ReactDream(doTranslate(getTranslateFromProps)(Component))

// rotate : Component -> (Props -> Number) -> ReactDream
const rotate = Component => getRotateFromProps =>
  ReactDream(doRotate(getRotateFromProps)(Component))

// scale : Component -> (Props -> Number) -> ReactDream
const scale = Component => getScaleFromProps => ReactDream(doScale(getScaleFromProps)(Component))

// style : Component -> (Props -> Style) -> ReactDream
const style = Component => getStyleFromProps =>
  contramap(Component)(styleFromProps(getStyleFromProps))

// TYPE
// ////////////////////////////////////////////////////////////////////////// //

// ReactDream.Stateless : Component -> ReactDream
export const Stateless = Component => ({
  Component,

  // Algebras
  ap: ap(Component),
  chain: chain(Component),
  concat: concat(Component),
  contramap: statelessContramap(Component),
  map: map(Component),
  promap: promap(Component),

  // Custom helpers
  addProps: addProps(Component),
  debug: debug(Component),
  defaultProps: defaultProps(Component),
  fork: fork(Component),
  name: name(Component),
  log: log(Component),
  propTypes: propTypes(Component),
  removeProps: removeProps(Component),
  rotate: rotate(Component),
  scale: scale(Component),
  style: style(Component),
  translate: translate(Component),
})

// ReactDream.Stateful : Component -> ReactDream
export const Stateful = Component => ({
  Component,

  // Algebras
  ap: ap(Component),
  chain: chain(Component),
  concat: concat(Component),
  contramap: statefulContramap(Component),
  map: map(Component),
  promap: promap(Component),

  // Custom helpers
  addProps: addProps(Component),
  debug: debug(Component),
  defaultProps: defaultProps(Component),
  fork: fork(Component),
  name: name(Component),
  log: log(Component),
  propTypes: propTypes(Component),
  removeProps: removeProps(Component),
  rotate: rotate(Component),
  scale: scale(Component),
  style: style(Component),
  translate: translate(Component),
})

const ReactDream = Component =>
  isReferentiallyTransparentFunctionComponent(Component)
    ? Stateless(Component)
    : Stateful(Component)

ReactDream.of = ReactDream

export const of = ReactDream.of

export default ReactDream
