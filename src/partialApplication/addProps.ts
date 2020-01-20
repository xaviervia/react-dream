import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["addProps"]>) => (
  reactDream: ReactDream<P>
) => reactDream.addProps(...f);
