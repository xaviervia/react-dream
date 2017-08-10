import * as _Html from './primitives/Html'
import * as _Svg from './primitives/Svg'

import _ReactDream from './ReactDream'

export { default as createElementWithProps } from './createElementWithProps'

export { default as styleFromProps } from './styleFromProps'

export { default as withStyleFromProps } from './withStyleFromProps'

export { default as addProps } from './partialApplication/addProps'
export { default as ap } from './partialApplication/ap'
export { default as chain } from './partialApplication/chain'
export { default as contramap } from './partialApplication/contramap'
export { default as debug } from './partialApplication/debug'
export { default as fork } from './partialApplication/fork'
export { default as log } from './partialApplication/log'
export { default as map } from './partialApplication/map'
export { default as name } from './partialApplication/name'
export { default as promap } from './partialApplication/promap'
export { default as removeProps } from './partialApplication/removeProps'
export { default as rotate } from './partialApplication/rotate'
export { default as scale } from './partialApplication/scale'
export { default as style } from './partialApplication/style'
export { default as translate } from './partialApplication/translate'

export const ReactDream = _ReactDream
export const of = _ReactDream
export const Html = _Html
export const Svg = _Svg
