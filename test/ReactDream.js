import React, { Component } from 'react'
import { create } from 'react-test-renderer'
import ReactDream from '../src/ReactDream'
import { example, suite } from './dsl'

const Target = x => x

export default suite(
  'ReactDream',

  example(
    'wraps the Component',

    () => ReactDream(Target).Component,

    Target
  ),

  ...suite(
    'Functor',

    ...suite(
      'map',

      example(
        'passes the resulting element through the function',

        () => {
          const Component = () => <h1>Hello</h1>
          const elementProcessor = element => <h2>{element}</h2>
          const EnhancedReactDreamComponent = ReactDream(Component)
            .map(elementProcessor)

          return create(<EnhancedReactDreamComponent.Component />)
            .toJSON()
        },

        {
          type: 'h2',
          props: {},
          children: [
            {
              type: 'h1',
              props: {},
              children: [
                'Hello'
              ]
            }
          ]
        }
      )
    )
  ),

  ...suite(
    'Contravariant',

    ...suite(
      'contramap',

      ...suite(
        'is a referentially transparent function component',
        example(
          'pre composes the propsPreprocesssor',
          () => {
            const ReferentiallyTransparentComponent = x => !x
            const propsPreprocessor = () => true
            const ReactDreamComponent = ReactDream(
              ReferentiallyTransparentComponent
            )

            return ReactDreamComponent.contramap(propsPreprocessor).Component()
          },
          false
        ),

        ...suite(
          'it has name',
          example(
            'preserves the name as displayName',
            () => {
              function ReferentiallyTransparentComponent(x) {
                return x
              }

              const ReactDreamComponent = ReactDream(ReferentiallyTransparentComponent)

              return ReactDreamComponent
                .contramap(x => x)
                .Component
                .displayName
            },
            'ReferentiallyTransparentComponent'
          )
        ),

        ...suite(
          'it has displayName',
          example(
            'preserves it',
            () => {
              const ReferentiallyTransparentComponent = x => x
              ReferentiallyTransparentComponent.displayName = 'Casablanca'

              const ReactDreamComponent = ReactDream(
                ReferentiallyTransparentComponent
              )

              return ReactDreamComponent
                .contramap(x => x)
                .Component
                .displayName
            },
            'Casablanca'
          )
        )
      ),

      ...suite(
        'is not referentially transparent',
        example(
          'returns a new component that wraps building the inner component with the propsPreprocesssor filtering the props',

          () => {
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

            return renderer.toJSON().children
          },

          [ 'Regina Spektor' ]
        ),

        ...suite(
          'it has name',
          example(
            'preserves the name as displayName',

            () => {
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

              return Enhanced.Component.displayName
            },
            'NotReferentiallyTransparent'
          )
        ),

        ...suite(
          'it has displayName',
          example(
            'preserves it',
            () => {
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

              return Enhanced.Component.displayName
            },
            'BeginToHope'
          )
        )
      )
    )
  ),

  ...suite(
    'Monad',
    ...suite(
      'chain',
      example(
        'calls the argument function with the Component',
        () => {
          const ReactDreamComponent = ReactDream(x => x + 1)

          return ReactDreamComponent.chain(Component => ReactDream(x => Component(x) + 1)).Component(0)
        },
        2
      )
    )
  ),

  ...suite(
    'Profunctor',
    ...suite(
      'promap',
      example(
        'passes the Component through the post and pre processor',

        () => {
          const preProcessor = () => ({ name: 'Radiohead' })
          const postProcessor = element => <main>{element}</main>

          const Enhanced = ReactDream(props => <h1 {...props} />)
            .promap(preProcessor, postProcessor)

          return create(<Enhanced.Component />).toJSON()
        },

        {
          type: 'main',
          props: {},
          children: [
            {
              type: 'h1',
              props: {
                name: 'Radiohead'
              },
              children: null
            }
          ]
        }
      )
    )
  ),

  ...suite(
    'Semigroup',
    ...suite(
      'concat',
      example(
        'combines two Components so that they return an array of elements',
        () => {
          const Concatenation = ReactDream(({ x }) => <hr id={x} />)
            .concat(ReactDream(({ y }) => <br id={y} />))

          const renderer = create(<Concatenation.Component x={1} y={2} />)

          return renderer.toJSON()
        },
        [
          { type: 'hr', props: { id: 1 }, children: null },
          { type: 'br', props: { id: 2 }, children: null }
        ]
      )
    )
  ),

  ...suite(
    'fork',
    example(
      'exposes the inner Component to the passed in function',
      () => ReactDream(Target).fork(x => x),
      Target
    )
  ),

  ...suite(
    'name',
    example(
      'sets displayName',
      () => {
        const Component = props => <hr />
        const EnhancedReactDreamComponent = ReactDream(Component).name('Hr')

        return EnhancedReactDreamComponent.Component.displayName
      },
      'Hr'
    )
  ),

  ...suite(
    'style',
    example(
      'sets the `style` prop with the return value',
      () => {
        const getStyleFromProps = ({ hovered }) => ({
          backgroundColor: hovered ? 'blue' : 'black',
        })

        const props = { hovered: true }

        const result = ReactDream(x => x).style(getStyleFromProps).Component(props)

        return result.style
      },

      {
        backgroundColor: 'blue'
      }
    ),

    example(
      'merges the `style` prop with existing value',
      () => {
        const getStyleFromProps = ({ hovered }) => ({
          backgroundColor: hovered ? 'blue' : 'black',
          color: 'green',
        })

        const props = { hovered: true, style: { backgroundColor: 'lightblue' } }

        const result = ReactDream(x => x).style(getStyleFromProps).Component(props)

        return result.style
      },
      {
        backgroundColor: 'lightblue',
        color: 'green'
      }
    )
  ),

  ...suite(
    'addProps',
    example(
      'merges with the props from the returned object, letting outside props override',

      () => {
        const ReactDreamComponent = ReactDream(x => x)
        const Enhanced = ReactDreamComponent.addProps(props => ({
          a: 1,
          b: 2,
        }))

        const result = Enhanced.Component({ b: 3, c: 4 })

        return result
      },

      {
        a: 1,
        b: 3,
        c: 4
      }
    )
  ),

  ...suite(
    'removeProps',
    example(
      'removes the specified props',

      () => {
        const ReactDreamComponent = ReactDream(x => x)
        const Enhanced = ReactDreamComponent.removeProps('hovered', 'focused')
        const result = Enhanced.Component({ hovered: true, focused: true, pressed: true })

        return result
      },

      {
        pressed: true,
      }
    )
  ),

  ...suite(
    'rotate',
    example(
      'adds a rotation set in degrees',
      () => {
        const Enhanced = ReactDream(x => x).rotate(({ rotation }) => rotation * 360)

        const result = Enhanced.Component({
          rotation: 0.5,
        })

        return result.style.transform
      },

      'rotate(180deg)'
    ),

    ...suite(
      'is there is a transform already',

      example(
        'concatenates this other transform',
        () => {
          const Enhanced = ReactDream(x => x).rotate(({ rotation }) => rotation * 360)

          const result = Enhanced.Component({
            rotation: 0.5,
            style: {
              transform: 'translate(20px, 20px)',
            },
          })

          return result.style.transform
        },
        'translate(20px, 20px) rotate(180deg)'
      )
    )
  ),

  ...suite(
    'scale',
    example(
      'adds a scaling factor',
      () => {
        const Enhanced = ReactDream(x => x).scale(({ big }) => (big ? 2 : 1))

        const result = Enhanced.Component({
          big: true,
        })

        return result.style.transform
      },
      'scale(2)'
    ),

    ...suite(
      'is there is a transform already',
      example(
        'concatenates this other transform',
        () => {
          const Enhanced = ReactDream(x => x).scale(({ big }) => (big ? 2 : 1))

          const result = Enhanced.Component({
            big: true,
            style: {
              transform: 'translate(20px, 20px)',
            },
          })

          return result.style.transform
        },
        'translate(20px, 20px) scale(2)'
      )
    )
  ),


  ...suite(
    'translate',
    ...suite(
      'is there is a transform already',
      example(
        'concatenates this other transform',
        () => {
          const Enhanced = ReactDream(x => x).translate(({ parentWidth, width }) => [
            (parentWidth - width) / 2,
          ])

          const result = Enhanced.Component({
            parentWidth: 100,
            width: 20,
            style: {
              transform: 'rotate(60deg)',
            },
          })

          return result.style.transform
        },
        'rotate(60deg) translateX(40px)'
      )
    ),

    ...suite(
      'one argument is passed',
      example(
        'sets the transform to a translate in X',
        () => {
          const Enhanced = ReactDream(x => x).translate(({ parentWidth, width }) => [
            (parentWidth - width) / 2,
          ])

          const result = Enhanced.Component({ parentWidth: 100, width: 20 })

          return result.style.transform
        },
        'translateX(40px)'
      )
    ),

    ...suite(
      'two arguments are passed',
      example(
        'sets the transform to a translate in X and Y',
        () => {
          const Enhanced = ReactDream(x => x).translate(({ parentSize, size }) => [
            (parentSize - size) / 2,
            (parentSize - size) / 2,
          ])

          const result = Enhanced.Component({ parentSize: 100, size: 20 })

          return result.style.transform
        },
        'translate(40px, 40px)'
      ),

      ...suite(
        'the first argument is empty',
        example(
          'sets the transform to translate only Y',
          () => {
            const Enhanced = ReactDream(x => x).translate(({ parentHeight, height }) => [
              null,
              (parentHeight - height) / 2,
            ])

            const result = Enhanced.Component({ parentHeight: 100, height: 20 })

            return result.style.transform
          },
          'translateY(40px)'
        )
      )
    ),

    ...suite(
      'three arguments are passed',
      example(
        'sets the transform to a translate in X, Y and Z',
        () => {
          const Enhanced = ReactDream(x => x).translate(({ parentSize, size }) => [
            (parentSize - size) / 2,
            (parentSize - size) / 2,
            (parentSize - size) / 2,
          ])

          const result = Enhanced.Component({ parentSize: 100, size: 20 })

          return result.style.transform
        },
        'translate3D(40px, 40px, 40px)'
      ),

      ...suite(
        'the first and second arguments are empty',
        example(
          'sets the transform to translate only Z',
          () => {
            const Enhanced = ReactDream(x => x).translate(({ parentHeight, height }) => [
              null,
              null,
              (parentHeight - height) / 2,
            ])

            const result = Enhanced.Component({ parentHeight: 100, height: 20 })

            return result.style.transform
          },
          'translateZ(40px)'
        )
      )
    )
  ),

  ...suite(
    'defaultProps',
    example(
      'sets the defaultProps',
      () => {
        const Enhanced = ReactDream(x => x)
          .defaultProps({
            title: 'Hello',
            description: 'Default Props',
          })

        return Enhanced.Component.defaultProps
      },
      {
        title: 'Hello',
        description: 'Default Props',
      }
    )
  ),
  ...suite(
    'propTypes',
    example(
      'sets the propTypes',
      () => {
        const Enhanced = ReactDream(x => x).propTypes({
          title: 'dummy propType',
          description: 'dummy propType',
        })

        return Enhanced.Component.propTypes
      },
      {
        title: 'dummy propType',
        description: 'dummy propType',
      }
    )
  )
)
