const calculateTransform = oldTransform => scaling =>
  oldTransform ? `${oldTransform} scale(${scaling})` : `scale(${scaling})`

// getScaleStyle : (Props -> Number) -> Component -> Component
export default getScaleFromProps =>
  props => ({
    ...props,
    style: {
      ...props.style,
      transform: calculateTransform(
        props && props.style && props.style.transform
      )(
        getScaleFromProps(props)
      ),
    },
  })
