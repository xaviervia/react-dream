/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Strong from './Strong'
import { equal } from 'assert'

describe('primitives / html / Strong', () => {
  it('has displayName `Strong`', () => {
    equal(Strong.Component.displayName, 'Strong')
  })

  it('is an `strong` tag that gets all props', () => {
    const renderer = create(<Strong.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'strong')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
