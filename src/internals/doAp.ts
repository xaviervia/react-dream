import { ReactDream } from "src/ReactDream";
import { Hoc } from "src/types";

// doAp : (Component -> Component) -> ReactDream -> Component
export default <P>(hoc: Hoc<P>) => (DreamComponent: ReactDream<P>) =>
  DreamComponent.fork(hoc);
