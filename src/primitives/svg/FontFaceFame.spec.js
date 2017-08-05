/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FontFaceFame from './FontFaceFame'
import { equal } from 'assert'

describe('primitives / html / FontFaceFame', () => {
  it('has displayName `FontFaceFame`', () => {
    equal(FontFaceFame.Component.displayName, 'FontFaceFame')
  })

  it('is an `fontFaceFame` tag that gets all props', () => {
    const renderer = create(<FontFaceFame.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'fontFaceFame')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
