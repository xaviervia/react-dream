import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["propTypes"]>) => (
  reactDream: ReactDream<P>
) => reactDream.propTypes(...f);
