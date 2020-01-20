import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["rotate"]>) => (
  reactDream: ReactDream<P>
) => reactDream.rotate(...f);
