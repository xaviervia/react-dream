import doContramap from "./internals/doContramap";
import styleFromProps from "./styleFromProps";
import { CSSProperties } from "react";

export default <P>(getStyleFromProps: (props: P) => CSSProperties) =>
  doContramap(styleFromProps(getStyleFromProps));
