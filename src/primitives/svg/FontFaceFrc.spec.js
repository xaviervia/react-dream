/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FontFaceFrc from './FontFaceFrc'
import { equal } from 'assert'

describe('primitives / html / FontFaceFrc', () => {
  it('has displayName `FontFaceFrc`', () => {
    equal(FontFaceFrc.Component.displayName, 'FontFaceFrc')
  })

  it('is an `fontFaceFrc` tag that gets all props', () => {
    const renderer = create(<FontFaceFrc.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'fontFaceFrc')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
