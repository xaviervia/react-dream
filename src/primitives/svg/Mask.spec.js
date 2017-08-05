/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Mask from './Mask'
import { equal } from 'assert'

describe('primitives / html / Mask', () => {
  it('has displayName `Mask`', () => {
    equal(Mask.Component.displayName, 'Mask')
  })

  it('is an `mask` tag that gets all props', () => {
    const renderer = create(<Mask.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'mask')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
