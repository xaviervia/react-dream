/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeFuncG from './FeFuncG'
import { equal } from 'assert'

describe('primitives / html / FeFuncG', () => {
  it('has displayName `FeFuncG`', () => {
    equal(FeFuncG.Component.displayName, 'FeFuncG')
  })

  it('is an `feFuncG` tag that gets all props', () => {
    const renderer = create(<FeFuncG.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feFuncG')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
