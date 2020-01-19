import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["promap"]>) => (
  reactDream: ReactDream<P>
) => reactDream.promap(...f);
