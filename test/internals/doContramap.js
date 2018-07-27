import React, { Component } from 'react'
import { create } from 'react-test-renderer'
import doContramap from '../../src/internals/doContramap'
import { example, suite } from '../dsl'

export default suite(
  'doContramap',

  ...suite(
    'is a referentially transparent function component',

    example(
      'pre composes the propsPreprocesssor',

      () => {
        const ReferentiallyTransparentComponent = x => !x
        const propsPreprocessor = () => true

        return doContramap(propsPreprocessor)(ReferentiallyTransparentComponent)()
      },

      false
    ),

    example(
      'it has name',

      () => {
        function ReferentiallyTransparentComponent(x) {
          return x
        }

        return doContramap(x => x)(ReferentiallyTransparentComponent).displayName
      },

      'ReferentiallyTransparentComponent'
    ),

    example(
      'it has displayName',

      () => {
        const ReferentiallyTransparentComponent = x => x
        ReferentiallyTransparentComponent.displayName = 'Casablanca'

        return doContramap(x => x)(ReferentiallyTransparentComponent).displayName
      },

      'Casablanca'
    ),
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

        const Enhanced = doContramap(propsPreprocesssor)(NotReferentiallyTransparent)

        const renderer = create(<Enhanced />)

        return renderer.toJSON().children
      },

      [ 'Regina Spektor' ]
    ),

    example(
      'it has name',

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

        const Enhanced = doContramap(propsPreprocesssor)(NotReferentiallyTransparent)

        return Enhanced.displayName
      },

      'NotReferentiallyTransparent'
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

          const Enhanced = doContramap(propsPreprocesssor)(NotReferentiallyTransparent)

          return Enhanced.displayName
        },

        'BeginToHope'
      )
    )
  )
)
