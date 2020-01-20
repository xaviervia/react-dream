import {
  ComponentType,
  ComponentClass,
  PropsWithChildren,
  ReactElement,
  WeakValidationMap,
  FC
} from "react";
// This is now pointless and should be removed
const isClassComponent = <P>(
  Component: ComponentType<P>
): Component is ComponentClass<P> =>
  Boolean(
    Component &&
      Component.prototype &&
      typeof Component.prototype.render === "function"
  );

export interface ReferentiallyTransparentFunctionComponent<P> {
  (props: PropsWithChildren<P>, context?: any): ReactElement | null;
  propTypes?: WeakValidationMap<P>;
}

const isReferentiallyTransparentFunctionComponent = <P>(
  Component: ComponentType<P>
): Component is FC<P> =>
  Boolean(
    typeof Component === "function" &&
      !isClassComponent<P>(Component) &&
      !Component.defaultProps &&
      !Component.contextTypes
  );

export default isReferentiallyTransparentFunctionComponent;
