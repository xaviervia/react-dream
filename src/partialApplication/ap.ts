import { ReactDream } from "src/ReactDream";

export default <P>(...f: Parameters<ReactDream<P>["ap"]>) => (
  reactDream: ReactDream<P>
) => reactDream.ap(...f);
