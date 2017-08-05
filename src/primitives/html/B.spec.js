/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import B from './B'
import { equal } from 'assert'

describe('primitives / html / B', () => {
  it('has displayName `B`', () => {
    equal(B.Component.displayName, 'B')
  })

  it('is an `b` tag that gets all props', () => {
    const renderer = create(<B.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'b')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
