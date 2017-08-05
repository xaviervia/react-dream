/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import AltGlyph from './AltGlyph'
import { equal } from 'assert'

describe('primitives / html / AltGlyph', () => {
  it('has displayName `AltGlyph`', () => {
    equal(AltGlyph.Component.displayName, 'AltGlyph')
  })

  it('is an `altGlyph` tag that gets all props', () => {
    const renderer = create(<AltGlyph.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'altGlyph')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
