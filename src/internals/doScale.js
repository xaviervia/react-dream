import { compose } from 'recompose'
import doContramap from './doContramap'

const calculateTransform = oldTransform => scaling =>
  oldTransform ? `${oldTransform} scale(${scaling})` : `scale(${scaling})`

// doScale : (Props -> Number) -> Component -> Component
export default getScaleFromProps => Component =>
  doContramap(props => ({
    ...props,
    style: {
      ...props.style,
      transform: compose(
        calculateTransform(props && props.style && props.style.transform),
        getScaleFromProps
      )(props),
    },
  }))(Component)
