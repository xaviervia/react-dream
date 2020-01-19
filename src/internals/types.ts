import * as React from "react";

export type Component =
  | keyof JSX.IntrinsicElements
  | React.JSXElementConstructor<any>;

export type PropsOf<C extends Component> = JSX.LibraryManagedAttributes<
  C,
  React.ComponentPropsWithRef<C>
>;
