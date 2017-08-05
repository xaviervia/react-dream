/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import H3 from './H3'
import { equal } from 'assert'

describe('primitives / html / H3', () => {
  it('has displayName `H3`', () => {
    equal(H3.Component.displayName, 'H3')
  })

  it('is an `h3` tag that gets all props', () => {
    const renderer = create(<H3.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'h3')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
