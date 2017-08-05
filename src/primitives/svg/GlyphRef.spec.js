/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import GlyphRef from './GlyphRef'
import { equal } from 'assert'

describe('primitives / html / GlyphRef', () => {
  it('has displayName `GlyphRef`', () => {
    equal(GlyphRef.Component.displayName, 'GlyphRef')
  })

  it('is an `glyphRef` tag that gets all props', () => {
    const renderer = create(<GlyphRef.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'glyphRef')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
