import { Hoc } from "@hocs/with-debugger/node_modules/src/types";

declare module "@hocs/with-log" {
  const hoc: <P>(messageFromProps: (props: P) => string) => Hoc<P>;
  export default hoc;
}
