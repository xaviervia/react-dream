/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeConvolveMatrix from './FeConvolveMatrix'
import { equal } from 'assert'

describe('primitives / html / FeConvolveMatrix', () => {
  it('has displayName `FeConvolveMatrix`', () => {
    equal(FeConvolveMatrix.Component.displayName, 'FeConvolveMatrix')
  })

  it('is an `feConvolveMatrix` tag that gets all props', () => {
    const renderer = create(<FeConvolveMatrix.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feConvolveMatrix')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
