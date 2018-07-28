import React, { Fragment } from 'react'
import compose from 'recompose/compose'
import getDisplayName from 'recompose/getDisplayName'
import setDisplayName from 'recompose/setDisplayName'
import recomposeDefaultProps from 'recompose/defaultProps'
import setPropTypes from 'recompose/setPropTypes'
import withDebugger from '@hocs/with-debugger'
import withLog from '@hocs/with-log'

import isReferentiallyTransparentFunctionComponent from './isReferentiallyTransparentFunctionComponent'

import getRotateStyle from './helpers/getRotateStyle'
import getScaleStyle from './helpers/getScaleStyle'
import getTranslateStyle from './helpers/getTranslateStyle'
import styleFromProps from './styleFromProps'

// ALGEBRAS
// ////////////////////////////////////////////////////////////////////////// //

// ap : (ReactComponent a e -> b) ->
//      ReactDream (ReactComponent a e) ->
//      ReactDream (b)
const ap = higherOrderComponent => ReactDreamComponent =>
  ReactDream(ReactDreamComponent.fork(higherOrderComponent))

// chain : Component -> (Component -> ReactDream) -> ReactDream
const chain = Component => kleisliReactDreamComponent =>
  kleisliReactDreamComponent(Component)

// concat : ReactComponent a e ->
//          ReactComponent b f ->
//          ReactDream (ReactComponent c g)
const concat = Component => ReactDreamComponent =>
  ReactDream(
    setDisplayName(
      getDisplayName(Component)
        .concat(getDisplayName(ReactDreamComponent.CompComponent))
    )(props => <Fragment>
      <Component {...props} />
      <ReactDreamComponent.Component {...props} />
    </Fragment>)
  )

// map : ReactComponent e a ->
//       (ReactComponent e a -> ReactComponent e b) ->
//       ReactDream (ReactComponent e b)
const map = Component => postProcessor =>
  ReactDream(props => postProcessor(<Component {...props} />))

// contramap : ReactComponent a e ->
//             (a -> b) ->
//             ReactDream (ReactComponent b e)
const contramap = Component => propsPreprocessor => {
  const Enhanced = isReferentiallyTransparentFunctionComponent(Component)
    ? compose(Component, propsPreprocessor)
    : props => <Component {...propsPreprocessor(props)} />

  Enhanced.displayName = getDisplayName(Component)

  return ReactDream(Enhanced)
}

// promap : ReactComponent b e ->
//          ((a -> b), (e -> f)) ->
//          ReactDream (ReactComponent a f)
const promap = Component => (preProcessor, postProcessor) =>
  map(
    contramap(Component)(preProcessor).Component
  )(
    postProcessor
  )


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

// name : ReactComponent a e -> String -> ReactDream (ReactComponent a e)
const name = Component => name =>
  ReactDream(setDisplayName(name)(Component))

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
const propTypes = Component => propTypesToSet =>
  ReactDream(setPropTypes(propTypesToSet)(Component))

// translate : Component -> (Props -> [Number]) -> ReactDream
const translate = Component => getTranslateFromProps =>
  contramap(Component)(getTranslateStyle(getTranslateFromProps))

// rotate : Component -> (Props -> Number) -> ReactDream
const rotate = Component => getRotateFromProps =>
  contramap(Component)(getRotateStyle(getRotateFromProps))

// scale : Component -> (Props -> Number) -> ReactDream
const scale = Component => getScaleFromProps =>
  contramap(Component)(getScaleStyle(getScaleFromProps))

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
  concat: concat(Component),
  contramap: contramap(Component),
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

ReactDream.of = ReactDream

export const of = ReactDream.of

export default ReactDream
