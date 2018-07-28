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

// getTranslateStyle : (Props a -> [Number]) -> Props a -> Props b
export default getTranslateFromProps =>
  props => ({
    ...props,
    style: {
      ...props.style,
      transform: calculateTransform(
        props && props.style && props.style.transform
      )(
        getTranslateFromProps(props)
      ),
    },
  })
