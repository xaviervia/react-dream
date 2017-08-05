/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeFuncB from './FeFuncB'
import { equal } from 'assert'

describe('primitives / html / FeFuncB', () => {
  it('has displayName `FeFuncB`', () => {
    equal(FeFuncB.Component.displayName, 'FeFuncB')
  })

  it('is an `feFuncB` tag that gets all props', () => {
    const renderer = create(<FeFuncB.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feFuncB')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
