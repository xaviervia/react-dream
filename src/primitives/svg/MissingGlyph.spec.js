/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import MissingGlyph from './MissingGlyph'
import { equal } from 'assert'

describe('primitives / html / MissingGlyph', () => {
  it('has displayName `MissingGlyph`', () => {
    equal(MissingGlyph.Component.displayName, 'MissingGlyph')
  })

  it('is an `missingGlyph` tag that gets all props', () => {
    const renderer = create(<MissingGlyph.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'missingGlyph')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
