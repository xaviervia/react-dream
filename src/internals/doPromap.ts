import doContramap from "./doContramap";
import doMap from "./doMap";
import { Endomorphism } from "fp-ts/lib/function";
import { flow } from "fp-ts/lib/function";
import { ComponentType } from "react";

// doPromap : ((a -> Props), (Component -> Component)) -> Component -> Component
const doPromap = <Inner, Outer extends Inner>(
  propsPreprocessor: (props: Outer) => Inner,
  higherOrderComponent: Endomorphism<ComponentType<Inner>>
) => flow(doMap(higherOrderComponent), doContramap(propsPreprocessor));

export default doPromap;
