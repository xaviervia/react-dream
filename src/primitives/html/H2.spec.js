/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import H2 from './H2'
import { equal } from 'assert'

describe('primitives / html / H2', () => {
  it('has displayName `H2`', () => {
    equal(H2.Component.displayName, 'H2')
  })

  it('is an `h2` tag that gets all props', () => {
    const renderer = create(<H2.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'h2')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
