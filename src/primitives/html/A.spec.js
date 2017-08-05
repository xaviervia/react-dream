/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import A from './A'
import { equal } from 'assert'

describe('primitives / html / A', () => {
  it('has displayName `A`', () => {
    equal(A.Component.displayName, 'A')
  })

  it('is an `a` tag that gets all props', () => {
    const renderer = create(<A.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'a')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
