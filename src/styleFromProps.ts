import { CSSProperties } from "react";

// styleFromProps : (Props -> Style) -> (Props -> Props)

interface Props {
  style?: CSSProperties;
}

export default <P extends Props>(
  getStyleFromProps: (props: P) => CSSProperties
) => (props: P) => ({
  ...props,
  style: {
    ...getStyleFromProps(props),
    ...(props.style ?? {})
  }
});
