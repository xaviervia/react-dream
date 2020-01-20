import doContramap from "./doContramap";
import doMap from "./doMap";
import { flow } from "fp-ts/lib/function";
import { Hoc } from "src/types";

// doPromap : ((a -> Props), (Component -> Component)) -> Component -> Component
const doPromap = <Inner, Outer extends Inner>(
  propsPreprocessor: (props: Outer) => Inner,
  hoc: Hoc<Inner>
) => flow(doMap(hoc), doContramap(propsPreprocessor));

export default doPromap;
