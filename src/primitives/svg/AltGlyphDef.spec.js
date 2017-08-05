/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import AltGlyphDef from './AltGlyphDef'
import { equal } from 'assert'

describe('primitives / html / AltGlyphDef', () => {
  it('has displayName `AltGlyphDef`', () => {
    equal(AltGlyphDef.Component.displayName, 'AltGlyphDef')
  })

  it('is an `altGlyphDef` tag that gets all props', () => {
    const renderer = create(<AltGlyphDef.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'altGlyphDef')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
