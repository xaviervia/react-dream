import React, { Component } from 'react'
import { create } from 'react-test-renderer'
import doContramap from './doContramap'
import { equal } from 'assert'

describe('Stateful / doContramap', () => {
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
