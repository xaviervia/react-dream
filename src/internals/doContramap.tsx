import React, { ComponentType } from "react";
import compose from "recompose/compose";
import getDisplayName from "recompose/getDisplayName";
import isReferentiallyTransparentFunctionComponent from "../isReferentiallyTransparentFunctionComponent";

// doContramap : (a -> Props) -> Component -> Component
const doContramap = <Inner, Outer extends Inner>(
  propsPreprocessor: (props: Outer) => Inner
) => (Component: ComponentType<Inner>) => {
  const Enhanced = isReferentiallyTransparentFunctionComponent<Inner>(Component)
    ? compose<Inner, Outer>(Component, propsPreprocessor)
    : (props: Outer) => <Component {...propsPreprocessor(props)} />;

  (Enhanced as ComponentType<Outer>).displayName = getDisplayName(Component);

  return Enhanced as ComponentType<Outer>;
};

export default doContramap;
