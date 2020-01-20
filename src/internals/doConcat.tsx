import React, { Fragment, ComponentType, FC } from "react";
import getDisplayName from "recompose/getDisplayName";
import setDisplayName from "recompose/setDisplayName";

// doConcat : Component -> Component -> Component
type DoConcat = <P>(a: ComponentType<P>) => (b: ComponentType<P>) => FC<P>;
const doConcat: DoConcat = ComponentA => ComponentB =>
  setDisplayName(getDisplayName(ComponentB).concat(getDisplayName(ComponentA)))(
    props => (
      <Fragment>
        <ComponentB {...props} />
        <ComponentA {...props} />
      </Fragment>
    )
  );

export default doConcat;
