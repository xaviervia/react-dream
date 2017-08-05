/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Tref from './Tref'
import { equal } from 'assert'

describe('primitives / html / Tref', () => {
  it('has displayName `Tref`', () => {
    equal(Tref.Component.displayName, 'Tref')
  })

  it('is an `tref` tag that gets all props', () => {
    const renderer = create(<Tref.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'tref')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
