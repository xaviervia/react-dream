import washington from 'washington'

import EntrypointReactDream, * as entrypoint from '../src'

import DirectReactDream from '../src/ReactDream'
import addProps from '../src/partialApplication/addProps'
import ap from '../src/partialApplication/ap'
import chain from '../src/partialApplication/chain'
import concat from '../src/partialApplication/concat'
import contramap from '../src/partialApplication/contramap'
import debug from '../src/partialApplication/debug'
import defaultProps from '../src/partialApplication/defaultProps'
import fork from '../src/partialApplication/fork'
import log from '../src/partialApplication/log'
import map from '../src/partialApplication/map'
import name from '../src/partialApplication/name'
import promap from '../src/partialApplication/promap'
import propTypes from '../src/partialApplication/propTypes'
import removeProps from '../src/partialApplication/removeProps'
import rotate from '../src/partialApplication/rotate'
import scale from '../src/partialApplication/scale'
import style from '../src/partialApplication/style'
import translate from '../src/partialApplication/translate'

import { example, suite } from './dsl'

const entrypointSuite = suite(
  'entrypoint',

  example(
    'exposes ReactDream',
    () => DirectReactDream,
    EntrypointReactDream
  ),

  example(
    'exposes addProps',
    () => addProps,
    entrypoint.addProps
  ),

  example(
    'exposes ap',
    () => ap,
    entrypoint.ap
  ),

  example(
    'exposes chain',
    () => chain,
    entrypoint.chain
  ),

  example(
    'exposes concat',
    () => concat,
    entrypoint.concat
  ),

  example(
    'exposes contramap',
    () => contramap,
    entrypoint.contramap
  ),

  example(
    'exposes debug',
    () => debug,
    entrypoint.debug
  ),

  example(
    'exposes defaultProps',
    () => defaultProps,
    entrypoint.defaultProps
  ),

  example(
    'exposes fork',
    () => fork,
    entrypoint.fork
  ),

  example(
    'exposes log',
    () => log,
    entrypoint.log
  ),

  example(
    'exposes map',
    () => map,
    entrypoint.map
  ),

  example(
    'exposes name',
    () => name,
    entrypoint.name
  ),

  example(
    'exposes promap',
    () => promap,
    entrypoint.promap
  ),

  example(
    'exposes propTypes',
    () => propTypes,
    entrypoint.propTypes
  ),

  example(
    'exposes removeProps',
    () => removeProps,
    entrypoint.removeProps
  ),

  example(
    'exposes rotate',
    () => rotate,
    entrypoint.rotate
  ),

  example(
    'exposes scale',
    () => scale,
    entrypoint.scale
  ),

  example(
    'exposes style',
    () => style,
    entrypoint.style
  ),

  example(
    'exposes translate',
    () => translate,
    entrypoint.translate
  ),

  example(
    'exposes of',
    () => DirectReactDream,
    entrypoint.of
  )
)

import createElementWithPropsSuite from './createElementWithProps'
import partialApplicationSuite from './partialApplication'
import ReactDreamSuite from './ReactDream'
import styleFromPropsSuite from './styleFromProps'

import jsDomGlobal from 'jsdom-global'

jsDomGlobal()

washington([
  ...entrypointSuite,
  ...createElementWithPropsSuite,
  ...partialApplicationSuite,
  ...ReactDreamSuite,
  ...styleFromPropsSuite,
])
