/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeDropShadow from './FeDropShadow'
import { equal } from 'assert'

describe('primitives / html / FeDropShadow', () => {
  it('has displayName `FeDropShadow`', () => {
    equal(FeDropShadow.Component.displayName, 'FeDropShadow')
  })

  it('is an `feDropShadow` tag that gets all props', () => {
    const renderer = create(<FeDropShadow.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feDropShadow')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
