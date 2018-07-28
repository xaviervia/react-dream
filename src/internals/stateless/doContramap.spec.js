import React, { Component } from 'react'
import { create } from 'react-test-renderer'
import doContramap from './doContramap'
import { equal } from 'assert'

describe('Stateless / doContramap', () => {
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
