/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeDiffuseLighting from './FeDiffuseLighting'
import { equal } from 'assert'

describe('primitives / html / FeDiffuseLighting', () => {
  it('has displayName `FeDiffuseLighting`', () => {
    equal(FeDiffuseLighting.Component.displayName, 'FeDiffuseLighting')
  })

  it('is an `feDiffuseLighting` tag that gets all props', () => {
    const renderer = create(<FeDiffuseLighting.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feDiffuseLighting')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
