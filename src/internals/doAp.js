// doAp : (Component -> Component) -> ReactDream -> Component
export default higherOrderComponent => DreamComponent => DreamComponent.fork(higherOrderComponent)
