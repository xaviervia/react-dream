/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Rp from './Rp'
import { equal } from 'assert'

describe('primitives / html / Rp', () => {
  it('has displayName `Rp`', () => {
    equal(Rp.Component.displayName, 'Rp')
  })

  it('is an `rp` tag that gets all props', () => {
    const renderer = create(<Rp.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'rp')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
