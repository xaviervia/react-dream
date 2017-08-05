/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Tspan from './Tspan'
import { equal } from 'assert'

describe('primitives / html / Tspan', () => {
  it('has displayName `Tspan`', () => {
    equal(Tspan.Component.displayName, 'Tspan')
  })

  it('is an `tspan` tag that gets all props', () => {
    const renderer = create(<Tspan.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'tspan')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
