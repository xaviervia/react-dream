/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeBlend from './FeBlend'
import { equal } from 'assert'

describe('primitives / html / FeBlend', () => {
  it('has displayName `FeBlend`', () => {
    equal(FeBlend.Component.displayName, 'FeBlend')
  })

  it('is an `feBlend` tag that gets all props', () => {
    const renderer = create(<FeBlend.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feBlend')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
