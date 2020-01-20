import doTransform from "./doTransform";

// doRotate : (Props -> Number) -> Component -> Component
export default doTransform(oldTransform => (rotation: number) =>
  oldTransform
    ? `${oldTransform} rotate(${rotation}deg)`
    : `rotate(${rotation}deg)`
);
