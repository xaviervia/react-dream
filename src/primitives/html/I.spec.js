/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import I from './I'
import { equal } from 'assert'

describe('primitives / html / I', () => {
  it('has displayName `I`', () => {
    equal(I.Component.displayName, 'I')
  })

  it('is an `i` tag that gets all props', () => {
    const renderer = create(<I.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'i')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
