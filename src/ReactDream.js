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

// ALGEBRAS
// ////////////////////////////////////////////////////////////////////////// //

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
  ReactDream(x => postProcessor(Component(x)))

// statelessContramap : ReactComponent a e ->
//             (a -> b) ->
//             ReactDream (ReactComponent b e)
const statelessContramap = Component => propsPreprocessor => 
    Stateless(compose(Component, propsPreprocessor))

// statefulContramap : ReactComponent a e ->
//             (a -> b) ->
//             ReactDream (ReactComponent b e)
const statefulContramap = Component => propsPreprocessor => 
    Stateful(props => <Component {...propsPreprocessor(props)} />)

// statelessPromap : ReactComponent b e ->
//          ((a -> b), (e -> f)) ->
//          ReactDream (ReactComponent a f)
const statelessPromap = Component => (preProcessor, postProcessor) =>
  map(
    statelessContramap(Component)(preProcessor).Component
  )(
    postProcessor
  )

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
  contramap(Component)(props => ({
    ...props,
    style: {
      ...getStyleFromProps(props),
      ...(props.style || {}),
    },
  }))


// TYPE
// ////////////////////////////////////////////////////////////////////////// //

// Stateless : Component -> ReactDream
const Stateless = Component => ({
  Component,

  // Algebras
  chain: chain(Component),
  concat: concat(Component),
  contramap: statelessContramap(Component),
  map: map(Component),
  promap: statelessPromap(Component),

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

// Stateful : Component -> ReactDream
const Stateful = Component => ({
  Component,

  // Algebras
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

// LIFTER
// /////////////////////////////////////////////////////////////////////////////////// //

// ReactDream : Component -> ReactDream
const ReactDream = Component =>
  isReferentiallyTransparentFunctionComponent(Component)
    ? Stateless(Component)
    : Stateful(Component)

export default ReactDream
