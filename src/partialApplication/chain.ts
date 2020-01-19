import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["chain"]>) => (
  reactDream: ReactDream<P>
) => reactDream.chain(...f);
