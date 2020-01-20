import setDisplayName from "recompose/setDisplayName";
import recomposeDefaultProps from "recompose/defaultProps";
import setPropTypes from "recompose/setPropTypes";
import { flow, Endomorphism } from "fp-ts/lib/function";
import doAp from "./internals/doAp";
import doConcat from "./internals/doConcat";
import doContramap from "./internals/doContramap";
import doMap from "./internals/doMap";
import doPromap from "./internals/doPromap";
import doRotate from "./internals/doRotate";
import doTranslate from "./internals/doTranslate";
import doScale from "./internals/doScale";
import styleFromProps from "./styleFromProps";
import { ComponentType, ValidationMap, CSSProperties } from "react";
import { Hoc } from "./types";

interface EnhancedProps {
  style?: {
    transform?: string;
  };
}

export interface ReactDream<P extends EnhancedProps> {
  Component: ComponentType<P>;

  // ap : higherOrderComponent -> ReactDream -> ReactDream
  ap: (hoc: Hoc<P>) => ReactDream<P>;

  // chain : Component -> (Component -> ReactDream) -> ReactDream
  chain: (
    toDream: (Component: ComponentType<P>) => ReactDream<P>
  ) => ReactDream<P>;

  // map : Component -> (Component -> Component) -> ReactDream
  map: (hoc: Hoc<P>) => ReactDream<P>;

  // concat : ReactDream -> Component -> ReactDream
  concat: (OtherComponent: ReactDream<P>) => ReactDream<P>;

  // contramap : Component -> (a -> Props) -> ReactDream
  contramap: <Props extends P>(
    propsPreprocessor: (props: P) => Props
  ) => ReactDream<P>;

  // promap : Component -> (a -> Props) -> (Component -> Component) -> ReactDream
  promap: (propsPreprocessor: (props: P) => P, hoc: Hoc<P>) => ReactDream<P>;

  // addProps : Component -> (Props -> Props) -> ReactDream
  addProps: (getPropsToAdd: Endomorphism<P>) => ReactDream<P>;

  // fork : Component -> (Component -> a) -> a
  fork: <A>(extractComponent: (Component: ComponentType<P>) => A) => A;

  // defaultProps : Component -> (Props) -> ReactDream
  defaultProps: (props: P) => ReactDream<P>;

  // name : Component -> String -> ReactDream
  name: (name: string) => ReactDream<P>;

  // removeProps : Component -> (...Array) -> ReactDream
  removeProps: (...propsToRemove: Array<keyof P>) => ReactDream<P>;

  // propTypes : Component -> (PropTypes) -> ReactDream
  propTypes: (propTypes: ValidationMap<P>) => ReactDream<P>;

  // rotate : Component -> (Props -> Number) -> ReactDream
  rotate: (getRotateFromProps: (props: P) => number) => ReactDream<P>;

  // scale : Component -> (Props -> Number) -> ReactDream
  scale: (getScaleFromProps: (props: P) => number) => ReactDream<P>;

  // style : Component -> (Props -> Style) -> ReactDream
  style: (getStyleFromProps: (props: P) => CSSProperties) => ReactDream<P>;

  // translate : Component -> (Props -> [Number]) -> ReactDream
  translate: (
    getTranslateFromProps: (props: P) => Array<number | null>
  ) => ReactDream<P>;
}

const ReactDream = <P>(Component: ComponentType<P>): ReactDream<P> => ({
  Component,
  ap: hoc => ReactDream(doAp(hoc)(ReactDream(Component))),
  chain: toDream => toDream(Component),
  map: hoc => ReactDream(doMap(hoc)(Component)),
  concat: OtherComponent =>
    ReactDream(doConcat(OtherComponent.Component)(Component)),
  contramap: propsPreprocessor =>
    ReactDream(doContramap<P, P>(propsPreprocessor)(Component)),
  promap: (propsPreprocessor, hoc) =>
    ReactDream(doPromap<P, P>(propsPreprocessor, hoc)(Component)),
  addProps: getPropsToAdd =>
    ReactDream(Component).contramap(props => ({
      ...getPropsToAdd(props),
      ...props
    })),
  fork: extractComponent => extractComponent(Component),
  defaultProps: props =>
    ReactDream(
      (recomposeDefaultProps(props)(Component) as unknown) as ComponentType<P>
    ),
  name: flow(setDisplayName, ReactDream(Component).map),
  removeProps: (...propsToRemove) =>
    ReactDream(Component).contramap(props => {
      // Nasty but efficient
      const propsCopy = { ...props };
      propsToRemove.forEach(propName => {
        delete propsCopy[propName];
      });
      return propsCopy;
    }),
  propTypes: propTypesToSet =>
    ReactDream(setPropTypes(propTypesToSet)(Component)),
  scale: getScaleFromProps => ReactDream(doScale(getScaleFromProps)(Component)),
  translate: getTranslateFromProps =>
    ReactDream(doTranslate(getTranslateFromProps)(Component)),
  rotate: getRotateFromProps =>
    ReactDream(doRotate(getRotateFromProps)(Component)),
  style: getStyleFromProps =>
    ReactDream(Component).contramap(styleFromProps(getStyleFromProps))
});

// TYPE
// ////////////////////////////////////////////////////////////////////////// //

export default ReactDream;
