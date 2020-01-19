import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["log"]>) => (
  reactDream: ReactDream<P>
) => reactDream.log(...f);
