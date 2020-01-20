import doTransform from "./doTransform";

// doScale : (Props -> Number) -> Component -> Component
export default doTransform(oldTransform => (scaling: number) =>
  oldTransform ? `${oldTransform} scale(${scaling})` : `scale(${scaling})`
);
