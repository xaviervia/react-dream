/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Discard from './Discard'
import { equal } from 'assert'

describe('primitives / html / Discard', () => {
  it('has displayName `Discard`', () => {
    equal(Discard.Component.displayName, 'Discard')
  })

  it('is an `discard` tag that gets all props', () => {
    const renderer = create(<Discard.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'discard')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
