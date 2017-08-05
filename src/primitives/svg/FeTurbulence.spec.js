/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeTurbulence from './FeTurbulence'
import { equal } from 'assert'

describe('primitives / html / FeTurbulence', () => {
  it('has displayName `FeTurbulence`', () => {
    equal(FeTurbulence.Component.displayName, 'FeTurbulence')
  })

  it('is an `feTurbulence` tag that gets all props', () => {
    const renderer = create(<FeTurbulence.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feTurbulence')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
