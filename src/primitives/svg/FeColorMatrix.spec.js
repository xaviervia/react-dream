/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeColorMatrix from './FeColorMatrix'
import { equal } from 'assert'

describe('primitives / html / FeColorMatrix', () => {
  it('has displayName `FeColorMatrix`', () => {
    equal(FeColorMatrix.Component.displayName, 'FeColorMatrix')
  })

  it('is an `feColorMatrix` tag that gets all props', () => {
    const renderer = create(<FeColorMatrix.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feColorMatrix')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
