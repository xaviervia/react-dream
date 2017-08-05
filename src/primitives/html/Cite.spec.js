/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Cite from './Cite'
import { equal } from 'assert'

describe('primitives / html / Cite', () => {
  it('has displayName `Cite`', () => {
    equal(Cite.Component.displayName, 'Cite')
  })

  it('is an `cite` tag that gets all props', () => {
    const renderer = create(<Cite.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'cite')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
