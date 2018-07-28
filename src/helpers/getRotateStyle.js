const calculateTransform = oldTransform => rotation =>
  oldTransform ? `${oldTransform} rotate(${rotation}deg)` : `rotate(${rotation}deg)`

// getRotateStyle : (Props a -> Number) -> Props a -> Props b
export default getRotateFromProps =>
  props => ({
    ...props,
    style: {
      ...props.style,
      transform:
        calculateTransform(
          props && props.style && props.style.transform
        )(
          getRotateFromProps(props)
        ),
    },
  })
