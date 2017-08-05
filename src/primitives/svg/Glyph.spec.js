/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Glyph from './Glyph'
import { equal } from 'assert'

describe('primitives / html / Glyph', () => {
  it('has displayName `Glyph`', () => {
    equal(Glyph.Component.displayName, 'Glyph')
  })

  it('is an `glyph` tag that gets all props', () => {
    const renderer = create(<Glyph.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'glyph')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
