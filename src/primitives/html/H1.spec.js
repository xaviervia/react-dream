/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import H1 from './H1'
import { equal } from 'assert'

describe('primitives / html / H1', () => {
  it('has displayName `H1`', () => {
    equal(H1.Component.displayName, 'H1')
  })

  it('is an `h1` tag that gets all props', () => {
    const renderer = create(<H1.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'h1')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
