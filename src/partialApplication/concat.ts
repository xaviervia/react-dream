import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["concat"]>) => (
  reactDream: ReactDream<P>
) => reactDream.concat(...f);
