import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["name"]>) => (
  reactDream: ReactDream<P>
) => reactDream.name(...f);
