import React, { ComponentType, FC } from "react";
import getDisplayName from "recompose/getDisplayName";
import isReferentiallyTransparentFunctionComponent from "../isReferentiallyTransparentFunctionComponent";
import { flow } from "fp-ts/lib/function";

// doContramap : (a -> Props) -> Component -> Component
const doContramap = <Inner, Outer extends Inner>(
  propsPreprocessor: (props: Outer) => Inner
) => (Component: ComponentType<Inner>) => {
  const Enhanced = isReferentiallyTransparentFunctionComponent<Inner>(Component)
    ? flow(propsPreprocessor, Component)
    : (props: Outer) => <Component {...propsPreprocessor(props)} />;

  (Enhanced as ComponentType<Outer>).displayName = getDisplayName(Component);

  return Enhanced as FC<Outer>;
};

export default doContramap;
