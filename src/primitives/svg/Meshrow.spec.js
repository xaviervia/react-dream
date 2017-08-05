/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Meshrow from './Meshrow'
import { equal } from 'assert'

describe('primitives / html / Meshrow', () => {
  it('has displayName `Meshrow`', () => {
    equal(Meshrow.Component.displayName, 'Meshrow')
  })

  it('is an `meshrow` tag that gets all props', () => {
    const renderer = create(<Meshrow.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'meshrow')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
