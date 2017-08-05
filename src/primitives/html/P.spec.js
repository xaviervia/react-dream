/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import P from './P'
import { equal } from 'assert'

describe('primitives / html / P', () => {
  it('has displayName `P`', () => {
    equal(P.Component.displayName, 'P')
  })

  it('is an `p` tag that gets all props', () => {
    const renderer = create(<P.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'p')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
