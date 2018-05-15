const isClassComponent = Component =>
  Boolean(Component && Component.prototype && typeof Component.prototype.render === 'function')

const isReferentiallyTransparentFunctionComponent = Component =>
  Boolean(
    typeof Component === 'function' &&
      !isClassComponent(Component) &&
      !Component.defaultProps &&
      !Component.contextTypes
  )

export default isReferentiallyTransparentFunctionComponent
