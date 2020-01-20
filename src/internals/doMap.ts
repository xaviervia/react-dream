import { Hoc } from "src/types";
import { ComponentType } from "react";

// (Component -> Component) -> Component -> Component
export default <P>(higherOrderComponent: Hoc<P>) => (
  Component: ComponentType<P>
) => higherOrderComponent(Component);
