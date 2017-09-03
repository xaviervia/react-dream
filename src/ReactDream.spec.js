import React, { Component } from 'react'
import { create } from 'react-test-renderer'
import ReactDream, { of } from './ReactDream'
import { deepEqual, equal } from 'assert'
import { identity } from 'ramda'

describe('ReactDream', () => {
  it('wraps the Component', () => {
    const Component = x => x
    const ReactDreamComponent = ReactDream(Component)

    equal(ReactDreamComponent.Component, Component)
  })

  describe('Functor', () => {
    describe('map', () => {
      it('runs the Component through the HoC and puts it back in a ReactDream', () => {
        const Component = 1
        const higherOrderComponent = x => x + 1
        const EnhancedReactDreamComponent = ReactDream(Component).map(higherOrderComponent)

        equal(EnhancedReactDreamComponent.Component, 2)
      })
    })
  })

  describe('Apply', () => {
    describe('ap', () => {
      it('passes the argument to the component', () => {
        const ReactDreamComponent = ReactDream(x => !x)

        equal(ReactDreamComponent.ap(ReactDream(false)).Component, true)
      })
    })
  })

  describe('Applicative', () => {
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

  describe('Contravariant', () => {
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
  })

  describe('Monad', () => {
    describe('chain', () => {
      it('calls the argument function with the Component', () => {
        const ReactDreamComponent = ReactDream(x => x + 1)

        equal(
          ReactDreamComponent.chain(Component => ReactDream(x => Component(x) + 1)).Component(0),
          2
        )
      })
    })
  })

  describe('Profunctor', () => {
    describe('promap', () => {
      it('passes the Component through the higher-order Component and the props preprocessor', () => {
        const propsPreprocessor = () => ({ name: 'Radiohead' })
        const higherOrderComponent = Target => ({ name }) =>
          <div>
            <Target>
              {name}
            </Target>
          </div>

        const Enhanced = ReactDream(props => <h1 {...props} />).promap(
          propsPreprocessor,
          higherOrderComponent
        )

        const renderer = create(<Enhanced.Component />)

        equal(renderer.toJSON().type, 'div')
        equal(renderer.toJSON().children[0].props.name, 'Radiohead')
      })
    })
  })

  describe('Semigroup', () => {
    describe('concat', () => {
      it('combines two Components so that they return an array of elements', () => {
        const Concatenation = ReactDream(({ x }) => x).concat(ReactDream(({ y }) => y))

        const renderer = create(<Concatenation.Component x={1} y={2} />)

        deepEqual(renderer.toJSON(), [1, 2])
      })
    })
  })

  describe('Monoid', () => {
    describe('empty', () => {
      it('returns false', () => {
        equal(ReactDream.empty().Component(), false)
      })
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

  describe('addProps', () => {
    it('merges with the props from the returned object, letting outside props override', () => {
      const ReactDreamComponent = ReactDream(identity)
      const Enhanced = ReactDreamComponent.addProps(props => ({
        a: 1,
        b: 2,
      }))

      const result = Enhanced.Component({ b: 3, c: 4 })

      equal(result.a, 1)
      equal(result.b, 3)
      equal(result.c, 4)
    })
  })

  describe('removeProps', () => {
    it('removes the specified props', () => {
      const ReactDreamComponent = ReactDream(identity)
      const Enhanced = ReactDreamComponent.removeProps('hovered', 'focused')
      const result = Enhanced.Component({ hovered: true, focused: true, pressed: true })

      equal(result.hovered, undefined)
      equal(result.focused, undefined)
      equal(result.pressed, true)
    })
  })

  describe('rotate', () => {
    it('adds a rotation set in degrees', () => {
      const Enhanced = ReactDream(identity).rotate(({ rotation }) => rotation * 360)

      const result = Enhanced.Component({
        rotation: 0.5,
      })

      equal(result.style.transform, 'rotate(180deg)')
    })

    describe('is there is a transform already', () => {
      it('concatenates this other transform', () => {
        const Enhanced = ReactDream(identity).rotate(({ rotation }) => rotation * 360)

        const result = Enhanced.Component({
          rotation: 0.5,
          style: {
            transform: 'translate(20px, 20px)',
          },
        })

        equal(result.style.transform, 'translate(20px, 20px) rotate(180deg)')
      })
    })
  })

  describe('scale', () => {
    it('adds a scaling factor', () => {
      const Enhanced = ReactDream(identity).scale(({ big }) => (big ? 2 : 1))

      const result = Enhanced.Component({
        big: true,
      })

      equal(result.style.transform, 'scale(2)')
    })

    describe('is there is a transform already', () => {
      it('concatenates this other transform', () => {
        const Enhanced = ReactDream(identity).scale(({ big }) => (big ? 2 : 1))

        const result = Enhanced.Component({
          big: true,
          style: {
            transform: 'translate(20px, 20px)',
          },
        })

        equal(result.style.transform, 'translate(20px, 20px) scale(2)')
      })
    })
  })

  describe('translate', () => {
    describe('is there is a transform already', () => {
      it('concatenates this other transform', () => {
        const Enhanced = ReactDream(identity).translate(({ parentWidth, width }) => [
          (parentWidth - width) / 2,
        ])

        const result = Enhanced.Component({
          parentWidth: 100,
          width: 20,
          style: {
            transform: 'rotate(60deg)',
          },
        })

        equal(result.style.transform, 'rotate(60deg) translateX(40px)')
      })
    })

    describe('one argument is passed', () => {
      it('sets the transform to a translate in X', () => {
        const Enhanced = ReactDream(identity).translate(({ parentWidth, width }) => [
          (parentWidth - width) / 2,
        ])

        const result = Enhanced.Component({ parentWidth: 100, width: 20 })

        equal(result.style.transform, 'translateX(40px)')
      })
    })

    describe('two arguments are passed', () => {
      it('sets the transform to a translate in X and Y', () => {
        const Enhanced = ReactDream(identity).translate(({ parentSize, size }) => [
          (parentSize - size) / 2,
          (parentSize - size) / 2,
        ])

        const result = Enhanced.Component({ parentSize: 100, size: 20 })

        equal(result.style.transform, 'translate(40px, 40px)')
      })

      describe('the first argument is empty', () => {
        it('sets the transform to translate only Y', () => {
          const Enhanced = ReactDream(identity).translate(({ parentHeight, height }) => [
            null,
            (parentHeight - height) / 2,
          ])

          const result = Enhanced.Component({ parentHeight: 100, height: 20 })

          equal(result.style.transform, 'translateY(40px)')
        })
      })
    })

    describe('three arguments are passed', () => {
      it('sets the transform to a translate in X, Y and Z', () => {
        const Enhanced = ReactDream(identity).translate(({ parentSize, size }) => [
          (parentSize - size) / 2,
          (parentSize - size) / 2,
          (parentSize - size) / 2,
        ])

        const result = Enhanced.Component({ parentSize: 100, size: 20 })

        equal(result.style.transform, 'translate3D(40px, 40px, 40px)')
      })

      describe('the first and second arguments are empty', () => {
        it('sets the transform to translate only Z', () => {
          const Enhanced = ReactDream(identity).translate(({ parentHeight, height }) => [
            null,
            null,
            (parentHeight - height) / 2,
          ])

          const result = Enhanced.Component({ parentHeight: 100, height: 20 })

          equal(result.style.transform, 'translateZ(40px)')
        })
      })
    })
  })

  describe('defaultProps', () => {
    it('sets the defaultProps', () => {
      const defaultProps = {
        title: 'Hello',
        description: 'Default Props',
      }
      const Enhanced = ReactDream(x => x).defaultProps(defaultProps)

      deepEqual(Enhanced.Component.defaultProps, defaultProps)
    })
  })

  describe('propTypes', () => {
    it('sets the propTypes', () => {
      const propTypes = {
        title: 'dummy propType',
        description: 'dummy propType',
      }
      const Enhanced = ReactDream(x => x).propTypes(propTypes)

      deepEqual(Enhanced.Component.propTypes, propTypes)
    })
  })
})
