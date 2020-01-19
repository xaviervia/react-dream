import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["translate"]>) => (
  reactDream: ReactDream<P>
) => reactDream.translate(...f);
