/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Kbd from './Kbd'
import { equal } from 'assert'

describe('primitives / html / Kbd', () => {
  it('has displayName `Kbd`', () => {
    equal(Kbd.Component.displayName, 'Kbd')
  })

  it('is an `kbd` tag that gets all props', () => {
    const renderer = create(<Kbd.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'kbd')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
