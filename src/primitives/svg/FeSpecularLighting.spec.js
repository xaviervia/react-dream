/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeSpecularLighting from './FeSpecularLighting'
import { equal } from 'assert'

describe('primitives / html / FeSpecularLighting', () => {
  it('has displayName `FeSpecularLighting`', () => {
    equal(FeSpecularLighting.Component.displayName, 'FeSpecularLighting')
  })

  it('is an `feSpecularLighting` tag that gets all props', () => {
    const renderer = create(<FeSpecularLighting.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feSpecularLighting')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
