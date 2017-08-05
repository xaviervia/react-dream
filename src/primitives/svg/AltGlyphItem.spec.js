/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import AltGlyphItem from './AltGlyphItem'
import { equal } from 'assert'

describe('primitives / html / AltGlyphItem', () => {
  it('has displayName `AltGlyphItem`', () => {
    equal(AltGlyphItem.Component.displayName, 'AltGlyphItem')
  })

  it('is an `altGlyphItem` tag that gets all props', () => {
    const renderer = create(<AltGlyphItem.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'altGlyphItem')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
