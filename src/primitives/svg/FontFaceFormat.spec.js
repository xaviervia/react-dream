/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FontFaceFormat from './FontFaceFormat'
import { equal } from 'assert'

describe('primitives / html / FontFaceFormat', () => {
  it('has displayName `FontFaceFormat`', () => {
    equal(FontFaceFormat.Component.displayName, 'FontFaceFormat')
  })

  it('is an `fontFaceFormat` tag that gets all props', () => {
    const renderer = create(<FontFaceFormat.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'fontFaceFormat')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
