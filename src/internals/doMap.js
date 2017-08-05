// (Component -> Component) -> Component -> Component
export default higherOrderComponent => Component =>
  higherOrderComponent(Component)
