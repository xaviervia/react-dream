import React, { Component } from 'react'
import { create } from 'react-test-renderer'
import doContramap from './doContramap'
import { equal } from 'assert'

describe('doContramap', () => {
  describe('is a referentially transparent function component', () => {
    it('pre composes the propsPreprocesssor', () => {
      const ReferentiallyTransparentComponent = x => !x
      const propsPreprocessor = () => true

      equal(doContramap(propsPreprocessor)(ReferentiallyTransparentComponent)(), false)
    })

    describe('it has name', () => {
      it('preserves the name as displayName', () => {
        function ReferentiallyTransparentComponent(x) {
          return x
        }

        equal(
          doContramap(x => x)(ReferentiallyTransparentComponent).displayName,
          'ReferentiallyTransparentComponent'
        )
      })
    })

    describe('it has displayName', () => {
      it('preserves it', () => {
        const ReferentiallyTransparentComponent = x => x
        ReferentiallyTransparentComponent.displayName = 'Casablanca'

        equal(doContramap(x => x)(ReferentiallyTransparentComponent).displayName, 'Casablanca')
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

      const Enhanced = doContramap(propsPreprocesssor)(NotReferentiallyTransparent)

      const renderer = create(<Enhanced />)

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

        const Enhanced = doContramap(propsPreprocesssor)(NotReferentiallyTransparent)

        equal(Enhanced.displayName, 'NotReferentiallyTransparent')
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

        const Enhanced = doContramap(propsPreprocesssor)(NotReferentiallyTransparent)

        equal(Enhanced.displayName, 'BeginToHope')
      })
    })
  })
})
