/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Meshpatch from './Meshpatch'
import { equal } from 'assert'

describe('primitives / html / Meshpatch', () => {
  it('has displayName `Meshpatch`', () => {
    equal(Meshpatch.Component.displayName, 'Meshpatch')
  })

  it('is an `meshpatch` tag that gets all props', () => {
    const renderer = create(<Meshpatch.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'meshpatch')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
