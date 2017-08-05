// styleFromProps : (Props -> Style) -> (Props -> Props)
export default getStyleFromProps => props => ({
  ...props,
  style: {
    ...getStyleFromProps(props),
    ...(props.style || {}),
  },
})
