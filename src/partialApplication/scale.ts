import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["scale"]>) => (
  reactDream: ReactDream<P>
) => reactDream.scale(...f);
