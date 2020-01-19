import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["debug"]>) => (
  reactDream: ReactDream<P>
) => reactDream.debug(...f);
