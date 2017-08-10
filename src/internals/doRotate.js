import { compose } from 'recompose'
import doContramap from './doContramap'

const calculateTransform = oldTransform => rotation =>
  oldTransform ? `${oldTransform} rotate(${rotation}deg)` : `rotate(${rotation}deg)`

// doRotate : (Props -> Number) -> Component -> Component
export default getRotateFromProps => Component =>
  doContramap(props => ({
    ...props,
    style: {
      ...props.style,
      transform: compose(
        calculateTransform(props && props.style && props.style.transform),
        getRotateFromProps
      )(props),
    },
  }))(Component)
