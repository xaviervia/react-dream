import React, { ComponentType, ReactElement } from "react";

type CreateElementWithProps = <P>(
  props: P
) => (Component: ComponentType<P>) => ReactElement;

const createElementWithProps: CreateElementWithProps = props => Component => (
  <Component {...props} />
);

export default createElementWithProps;
