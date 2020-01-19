import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["map"]>) => (
  reactDream: ReactDream<P>
) => reactDream.map(...f);
