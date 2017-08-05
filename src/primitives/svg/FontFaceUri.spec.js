/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FontFaceUri from './FontFaceUri'
import { equal } from 'assert'

describe('primitives / html / FontFaceUri', () => {
  it('has displayName `FontFaceUri`', () => {
    equal(FontFaceUri.Component.displayName, 'FontFaceUri')
  })

  it('is an `fontFaceUri` tag that gets all props', () => {
    const renderer = create(<FontFaceUri.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'fontFaceUri')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
