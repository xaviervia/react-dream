import doContramap from "./doContramap";
import { pipe } from "fp-ts/lib/pipeable";
import { ComponentType } from "react";

const calculateTransform = (oldTransform: string | undefined) => ([
  x,
  y,
  z
]: Array<number | null>): string | undefined => {
  const old = (str: string): string =>
    oldTransform ? `${oldTransform} ${str}` : str;

  switch (true) {
    case x != null && y != null && z != null:
      return old(`translate3D(${x}px, ${y}px, ${z}px)`);

    case x != null && y != null:
      return old(`translate(${x}px, ${y}px)`);

    case z != null:
      return old(`translateZ(${z}px)`);

    case y != null:
      return old(`translateY(${y}px)`);

    case x != null:
      return old(`translateX(${x}px)`);
  }
};

interface EnhancedProps {
  style?: {
    transform?: string;
  };
}

// doTranslate : (Props -> [Number]) -> Component -> Component
const doTranslate = <P extends EnhancedProps>(
  getTranslateFromProps: (props: P) => Array<number | null>
) => (Component: ComponentType<P>) =>
  doContramap<P, P>(props => ({
    ...props,
    style: {
      ...props.style,
      transform: pipe(
        getTranslateFromProps(props),
        calculateTransform(props?.style?.transform)
      )
    }
  }))(Component);

export default doTranslate;
