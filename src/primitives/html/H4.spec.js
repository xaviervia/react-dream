/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import H4 from './H4'
import { equal } from 'assert'

describe('primitives / html / H4', () => {
  it('has displayName `H4`', () => {
    equal(H4.Component.displayName, 'H4')
  })

  it('is an `h4` tag that gets all props', () => {
    const renderer = create(<H4.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'h4')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
