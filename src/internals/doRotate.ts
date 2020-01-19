import { pipe } from "fp-ts/lib/pipeable";
import doContramap from "./doContramap";
import { ComponentType } from "react";

const calculateTransform = (oldTransform: string | undefined) => (
  rotation: number
): string =>
  oldTransform
    ? `${oldTransform} rotate(${rotation}deg)`
    : `rotate(${rotation}deg)`;

interface EnhancedProps {
  style?: {
    transform?: string;
  };
}
// doRotate : (Props -> Number) -> Component -> Component
export default <P extends EnhancedProps>(
  getRotateFromProps: (props: P) => number
) => (Component: ComponentType<P>) =>
  doContramap<P, P>(props => ({
    ...props,
    style: {
      ...props.style,
      transform: pipe(
        getRotateFromProps(props),
        calculateTransform(props?.style?.transform)
      )
    }
  }))(Component);
