/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FontFace from './FontFace'
import { equal } from 'assert'

describe('primitives / html / FontFace', () => {
  it('has displayName `FontFace`', () => {
    equal(FontFace.Component.displayName, 'FontFace')
  })

  it('is an `fontFace` tag that gets all props', () => {
    const renderer = create(<FontFace.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'fontFace')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
