/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import ColorProfile from './ColorProfile'
import { equal } from 'assert'

describe('primitives / html / ColorProfile', () => {
  it('has displayName `ColorProfile`', () => {
    equal(ColorProfile.Component.displayName, 'ColorProfile')
  })

  it('is an `colorProfile` tag that gets all props', () => {
    const renderer = create(<ColorProfile.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'colorProfile')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
