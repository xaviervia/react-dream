import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["removeProps"]>) => (
  reactDream: ReactDream<P>
) => reactDream.removeProps(...f);
