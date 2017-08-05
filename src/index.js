import * as _Html from './primitives/Html'
import * as _Svg from './primitives/Svg'

import _ReactDream from './ReactDream'

export { default as createElementWithProps } from './createElementWithProps'

export { default as styleFromProps } from './styleFromProps'

export { default as withStyleFromProps } from './withStyleFromProps'

export { default as contramap } from './polyfills/contramap'

export const ReactDream = _ReactDream
export const of = _ReactDream
export const Html = _Html
export const Svg = _Svg
