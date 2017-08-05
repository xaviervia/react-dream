/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeMerge from './FeMerge'
import { equal } from 'assert'

describe('primitives / html / FeMerge', () => {
  it('has displayName `FeMerge`', () => {
    equal(FeMerge.Component.displayName, 'FeMerge')
  })

  it('is an `feMerge` tag that gets all props', () => {
    const renderer = create(<FeMerge.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feMerge')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
