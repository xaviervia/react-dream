import { compose } from 'recompose'
import doContramap from './doContramap'

const calculateTransform = oldTransform => ([x, y, z]) => {
  switch (true) {
    case x != null && y != null && z != null:
      return oldTransform
        ? `${oldTransform} translate3D(${x}px, ${y}px, ${z}px)`
        : `translate3D(${x}px, ${y}px, ${z}px)`

    case x != null && y != null:
      return oldTransform
        ? `${oldTransform} translate(${x}px, ${y}px)`
        : `translate(${x}px, ${y}px)`

    case z != null:
      return oldTransform ? `${oldTransform} translateZ(${z}px)` : `translateZ(${z}px)`

    case y != null:
      return oldTransform ? `${oldTransform} translateY(${y}px)` : `translateY(${y}px)`

    case x != null:
      return oldTransform ? `${oldTransform} translateX(${x}px)` : `translateX(${x}px)`
  }
}

// doTranslate : (Props -> [Number]) -> Component -> Component
export default getTranslateFromProps => Component =>
  doContramap(props => ({
    ...props,
    style: {
      ...props.style,
      transform: compose(
        calculateTransform(props && props.style && props.style.transform),
        getTranslateFromProps
      )(props),
    },
  }))(Component)
