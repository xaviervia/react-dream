// (Component -> Component) -> Component -> Component
export default <C>(higherOrderComponent: (component: C) => C) => (
  Component: C
) => higherOrderComponent(Component);
