import React, { Component } from 'react'
import { create } from 'react-test-renderer'
import ReactDream, { of } from './ReactDream'
import { equal } from 'assert'
import { identity } from 'ramda'

describe('ReactDream', () => {
  it('wraps the Component', () => {
    const Component = x => x
    const ReactDreamComponent = ReactDream(Component)

    equal(ReactDreamComponent.Component, Component)
  })

  describe('ap', () => {
    it('passes the argument to the component', () => {
      const ReactDreamComponent = ReactDream(x => !x)

      equal(ReactDreamComponent.ap(ReactDream(false)).Component, true)
    })
  })

  describe('chain', () => {
    it('calls the argument function with the Component', () => {
      const ReactDreamComponent = ReactDream(x => x + 1)

      equal(
        ReactDreamComponent.chain(Component => ReactDream(x => Component(x) + 1)).Component(0),
        2
      )
    })
  })

  describe('contramap', () => {
    describe('is a referentially transparent function component', () => {
      it('pre composes the propsPreprocesssor', () => {
        const ReferentiallyTransparentComponent = x => !x
        const propsPreprocessor = () => true
        const ReactDreamComponent = ReactDream(ReferentiallyTransparentComponent)

        equal(ReactDreamComponent.contramap(propsPreprocessor).Component(), false)
      })

      describe('it has name', () => {
        it('preserves the name as displayName', () => {
          function ReferentiallyTransparentComponent(x) {
            return x
          }

          const ReactDreamComponent = ReactDream(ReferentiallyTransparentComponent)

          equal(
            ReactDreamComponent.contramap(x => x).Component.displayName,
            'ReferentiallyTransparentComponent'
          )
        })
      })

      describe('it has displayName', () => {
        it('preserves it', () => {
          const ReferentiallyTransparentComponent = x => x
          ReferentiallyTransparentComponent.displayName = 'Casablanca'

          const ReactDreamComponent = ReactDream(ReferentiallyTransparentComponent)

          equal(ReactDreamComponent.contramap(x => x).Component.displayName, 'Casablanca')
        })
      })
    })

    describe('is not referentially transparent', () => {
      it('returns a new component that wraps building the inner component with the propsPreprocesssor filtering the props', () => {
        class NotReferentiallyTransparent extends Component {
          constructor() {
            super()

            this.state = {}
          }

          render() {
            return (
              <div>
                {this.props.name}
              </div>
            )
          }
        }

        const propsPreprocesssor = () => ({ name: 'Regina Spektor' })

        const ReactDreamComponent = ReactDream(NotReferentiallyTransparent)

        const Enhanced = ReactDreamComponent.contramap(propsPreprocesssor)

        const renderer = create(<Enhanced.Component />)

        equal(renderer.toJSON().children, 'Regina Spektor')
      })

      describe('it has name', () => {
        it('preserves the name as displayName', () => {
          class NotReferentiallyTransparent extends Component {
            constructor() {
              super()

              this.state = {}
            }

            render() {
              return (
                <div>
                  {this.props.name}
                </div>
              )
            }
          }

          const propsPreprocesssor = () => ({ name: 'Regina Spektor' })

          const ReactDreamComponent = ReactDream(NotReferentiallyTransparent)

          const Enhanced = ReactDreamComponent.contramap(propsPreprocesssor)

          equal(Enhanced.Component.displayName, 'NotReferentiallyTransparent')
        })
      })

      describe('it has displayName', () => {
        it('preserves it', () => {
          class NotReferentiallyTransparent extends Component {
            constructor() {
              super()

              this.state = {}
            }

            render() {
              return (
                <div>
                  {this.props.name}
                </div>
              )
            }
          }

          NotReferentiallyTransparent.displayName = 'BeginToHope'

          const propsPreprocesssor = () => ({ name: 'Regina Spektor' })

          const ReactDreamComponent = ReactDream(NotReferentiallyTransparent)

          const Enhanced = ReactDreamComponent.contramap(propsPreprocesssor)

          equal(Enhanced.Component.displayName, 'BeginToHope')
        })
      })
    })
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

  describe('style', () => {
    it('sets the `style` prop with the return value', () => {
      const getStyleFromProps = ({ hovered }) => ({
        backgroundColor: hovered ? 'blue' : 'black',
      })

      const props = { hovered: true }

      const result = ReactDream(identity).style(getStyleFromProps).Component(props)

      equal(result.style.backgroundColor, 'blue')
    })

    it('merges the `style` prop with existing value', () => {
      const getStyleFromProps = ({ hovered }) => ({
        backgroundColor: hovered ? 'blue' : 'black',
        color: 'green',
      })

      const props = { hovered: true, style: { backgroundColor: 'lightblue' } }

      const result = ReactDream(identity).style(getStyleFromProps).Component(props)

      equal(result.style.backgroundColor, 'lightblue')

      equal(result.style.color, 'green')
    })
  })

  describe('ReactDream.of', () => {
    it('wraps the Component', () => {
      const Component = x => x
      const ReactDreamComponent = ReactDream.of(Component)

      equal(ReactDreamComponent.Component, Component)
    })
  })

  describe('of - named export', () => {
    it('wraps the Component', () => {
      const Component = x => x
      const ReactDreamComponent = of(Component)

      equal(ReactDreamComponent.Component, Component)
    })
  })
})
