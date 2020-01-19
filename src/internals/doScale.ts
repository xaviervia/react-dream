import { pipe } from "fp-ts/lib/pipeable";
import doContramap from "./doContramap";
import { ComponentType } from "react";

const calculateTransform = (oldTransform: string | undefined) => (
  scaling: number
): string =>
  oldTransform ? `${oldTransform} scale(${scaling})` : `scale(${scaling})`;

interface EnhancedProps {
  style?: {
    transform?: string;
  };
}

// doScale : (Props -> Number) -> Component -> Component
const doScale = <P extends EnhancedProps>(
  getScaleFromProps: (props: P) => number
) => (Component: ComponentType<P>) =>
  doContramap<P, P>(props => ({
    ...props,
    style: {
      ...props.style,
      transform: pipe(
        getScaleFromProps(props),
        calculateTransform(props?.style?.transform)
      )
    }
  }))(Component);

export default doScale;
