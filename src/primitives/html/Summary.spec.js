/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Summary from './Summary'
import { equal } from 'assert'

describe('primitives / html / Summary', () => {
  it('has displayName `Summary`', () => {
    equal(Summary.Component.displayName, 'Summary')
  })

  it('is an `summary` tag that gets all props', () => {
    const renderer = create(<Summary.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'summary')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
