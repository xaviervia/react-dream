import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["style"]>) => (
  reactDream: ReactDream<P>
) => reactDream.style(...f);
