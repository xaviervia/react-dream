/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Rect from './Rect'
import { equal } from 'assert'

describe('primitives / html / Rect', () => {
  it('has displayName `Rect`', () => {
    equal(Rect.Component.displayName, 'Rect')
  })

  it('is an `rect` tag that gets all props', () => {
    const renderer = create(<Rect.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'rect')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
