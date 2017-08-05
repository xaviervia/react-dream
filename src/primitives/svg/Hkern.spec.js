/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Hkern from './Hkern'
import { equal } from 'assert'

describe('primitives / html / Hkern', () => {
  it('has displayName `Hkern`', () => {
    equal(Hkern.Component.displayName, 'Hkern')
  })

  it('is an `hkern` tag that gets all props', () => {
    const renderer = create(<Hkern.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'hkern')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
