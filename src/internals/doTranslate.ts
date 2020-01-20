import doTransform from "./doTransform";

// doTranslate : (Props -> [Number]) -> Component -> Component
export default doTransform(
  oldTransform => ([x, y, z]: Array<number | null>) => {
    const old = (str: string): string =>
      oldTransform ? `${oldTransform} ${str}` : str;

    switch (true) {
      case x != null && y != null && z != null:
        return old(`translate3D(${x}px, ${y}px, ${z}px)`);

      case x != null && y != null:
        return old(`translate(${x}px, ${y}px)`);

      case z != null:
        return old(`translateZ(${z}px)`);

      case y != null:
        return old(`translateY(${y}px)`);

      case x != null:
        return old(`translateX(${x}px)`);
    }
  }
);
