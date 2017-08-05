/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Unknown from './Unknown'
import { equal } from 'assert'

describe('primitives / html / Unknown', () => {
  it('has displayName `Unknown`', () => {
    equal(Unknown.Component.displayName, 'Unknown')
  })

  it('is an `unknown` tag that gets all props', () => {
    const renderer = create(<Unknown.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'unknown')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
