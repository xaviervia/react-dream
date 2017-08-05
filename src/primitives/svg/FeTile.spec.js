/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeTile from './FeTile'
import { equal } from 'assert'

describe('primitives / html / FeTile', () => {
  it('has displayName `FeTile`', () => {
    equal(FeTile.Component.displayName, 'FeTile')
  })

  it('is an `feTile` tag that gets all props', () => {
    const renderer = create(<FeTile.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feTile')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
