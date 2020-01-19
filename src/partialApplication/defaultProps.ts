import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["defaultProps"]>) => (
  reactDream: ReactDream<P>
) => reactDream.defaultProps(...f);
