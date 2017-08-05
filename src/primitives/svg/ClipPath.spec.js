/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import ClipPath from './ClipPath'
import { equal } from 'assert'

describe('primitives / html / ClipPath', () => {
  it('has displayName `ClipPath`', () => {
    equal(ClipPath.Component.displayName, 'ClipPath')
  })

  it('is an `clipPath` tag that gets all props', () => {
    const renderer = create(<ClipPath.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'clipPath')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
