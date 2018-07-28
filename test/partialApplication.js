import { example, suite } from './dsl'
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

export default suite(
  'partialApplication',

  ...[
    ['addProps', addProps],
    ['ap', ap],
    ['chain', chain],
    ['concat', concat],
    ['contramap', contramap],
    ['debug', debug],
    ['defaultProps', defaultProps],
    ['fork', fork],
    ['log', log],
    ['map', map],
    ['name', name],
    ['promap', promap],
    ['propTypes', propTypes],
    ['removeProps', removeProps],
    ['rotate', rotate],
    ['scale', scale],
    ['style', style],
    ['translate', translate],
  ].map(([name, f]) =>
    suite(
      name,
      example(
        `calls .${name} of the second arg`,

        () => f(arg => arg + ' allright')({
          [name]: g => g('hello,'),
        }),

        'hello, allright'
      )
    )
  )
  .reduce((a, b) => a.concat(b), [])
)
