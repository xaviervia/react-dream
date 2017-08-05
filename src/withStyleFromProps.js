import doContramap from './internals/doContramap'
import styleFromProps from './styleFromProps'

export default getStyleFromProps => doContramap(styleFromProps(getStyleFromProps))
