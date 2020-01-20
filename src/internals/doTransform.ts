import { pipe } from "fp-ts/lib/pipeable";
import doContramap from "./doContramap";

export interface EnhancedProps {
  style?: {
    transform?: string;
  };
}

const doTransform = <T>(
  calculateTransform: (
    oldTransform: string | undefined
  ) => (prop: T) => string | undefined
) => <P>(getTransformFromProps: (props: P) => T) =>
  doContramap<P, P & EnhancedProps>(props => ({
    ...props,
    style: {
      ...props.style,
      transform: pipe(
        getTransformFromProps(props),
        calculateTransform(props?.style?.transform)
      )
    }
  }));

export default doTransform;
