/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Cursor from './Cursor'
import { equal } from 'assert'

describe('primitives / html / Cursor', () => {
  it('has displayName `Cursor`', () => {
    equal(Cursor.Component.displayName, 'Cursor')
  })

  it('is an `cursor` tag that gets all props', () => {
    const renderer = create(<Cursor.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'cursor')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
