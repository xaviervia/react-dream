/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Q from './Q'
import { equal } from 'assert'

describe('primitives / html / Q', () => {
  it('has displayName `Q`', () => {
    equal(Q.Component.displayName, 'Q')
  })

  it('is an `q` tag that gets all props', () => {
    const renderer = create(<Q.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'q')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
