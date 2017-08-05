/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import H6 from './H6'
import { equal } from 'assert'

describe('primitives / html / H6', () => {
  it('has displayName `H6`', () => {
    equal(H6.Component.displayName, 'H6')
  })

  it('is an `h6` tag that gets all props', () => {
    const renderer = create(<H6.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'h6')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
