import ReactDream from './ReactDream'
import { equal } from 'assert'

describe('ReactDream', () => {
  it('wraps the Component', () => {
    const Component = x => x
    const ReactDreamComponent = ReactDream(Component)

    equal(ReactDreamComponent.Component, Component)
  })

  describe('map', () => {
    it('runs the Component through the HoC and puts it back in a ReactDream', () => {
      const Component = 1
      const higherOrderComponent = x => x + 1
      const EnhancedReactDreamComponent = ReactDream(Component).map(higherOrderComponent)

      equal(EnhancedReactDreamComponent.Component, 2)
    })
  })

  describe('fork', () => {
    it('exposes the inner Component to the passed in function', () => {
      const Component = props => <hr />
      const ReactDreamComponent = ReactDream(Component)

      equal(ReactDreamComponent.fork(x => x), Component)
    })
  })

  describe('name', () => {
    it('sets displayName', () => {
      const Component = props => <hr />
      const EnhancedReactDreamComponent = ReactDream(Component).name('Hr')

      equal(EnhancedReactDreamComponent.Component.displayName, 'Hr')
    })
  })
})
