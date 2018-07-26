import EntrypointReactDream, * as entrypoint from '.'
import { equal } from 'assert'

import DirectReactDream from './ReactDream'
import addProps from './partialApplication/addProps'
import ap from './partialApplication/ap'
import chain from './partialApplication/chain'
import concat from './partialApplication/concat'
import contramap from './partialApplication/contramap'
import debug from './partialApplication/debug'
import defaultProps from './partialApplication/defaultProps'
import fork from './partialApplication/fork'
import log from './partialApplication/log'
import map from './partialApplication/map'
import name from './partialApplication/name'
import promap from './partialApplication/promap'
import propTypes from './partialApplication/propTypes'
import removeProps from './partialApplication/removeProps'
import rotate from './partialApplication/rotate'
import scale from './partialApplication/scale'
import style from './partialApplication/style'
import translate from './partialApplication/translate'

describe('entrypoint', () => {
  it('exposes ReactDream', () => {
    equal(ReactDream, EntrypointReactDream)
  })

  it('exposes addProps', () => {
    equal(addProps, entrypoint.addProps)
  })

  it('exposes ap', () => {
    equal(ap, entrypoint.ap)
  })

  it('exposes chain', () => {
    equal(chain, entrypoint.chain)
  })

  it('exposes concat', () => {
    equal(concat, entrypoint.concat)
  })

  it('exposes contramap', () => {
    equal(contramap, entrypoint.contramap)
  })

  it('exposes debug', () => {
    equal(debug, entrypoint.debug)
  })

  it('exposes defaultProps', () => {
    equal(defaultProps, entrypoint.defaultProps)
  })

  it('exposes fork', () => {
    equal(fork, entrypoint.fork)
  })

  it('exposes log', () => {
    equal(log, entrypoint.log)
  })

  it('exposes map', () => {
    equal(map, entrypoint.map)
  })

  it('exposes name', () => {
    equal(name, entrypoint.name)
  })

  it('exposes promap', () => {
    equal(promap, entrypoint.promap)
  })

  it('exposes propTypes', () => {
    equal(propTypes, entrypoint.propTypes)
  })

  it('exposes removeProps', () => {
    equal(removeProps, entrypoint.removeProps)
  })

  it('exposes rotate', () => {
    equal(rotate, entrypoint.rotate)
  })

  it('exposes scale', () => {
    equal(scale, entrypoint.scale)
  })

  it('exposes style', () => {
    equal(style, entrypoint.style)
  })

  it('exposes translate', () => {
    equal(translate, entrypoint.translate)
  })

  it('exposes of', () => {
    equal(ReactDream, entrypoint.of)
  })
})
