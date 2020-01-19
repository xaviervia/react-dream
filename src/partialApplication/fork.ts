import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["fork"]>) => (
  reactDream: ReactDream<P>
) => reactDream.fork(...f);
