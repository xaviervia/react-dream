/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Keygen from './Keygen'
import { equal } from 'assert'

describe('primitives / html / Keygen', () => {
  it('has displayName `Keygen`', () => {
    equal(Keygen.Component.displayName, 'Keygen')
  })

  it('is an `keygen` tag that gets all props', () => {
    const renderer = create(<Keygen.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'keygen')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
