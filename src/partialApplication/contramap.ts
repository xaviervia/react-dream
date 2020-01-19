import { ReactDream } from "src/ReactDream";

export default <P, Props extends P>(propsPreprocessor: (props: P) => Props) => (
  reactDream: ReactDream<P>
) => reactDream.contramap(propsPreprocessor);
