/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import LinearGradient from './LinearGradient'
import { equal } from 'assert'

describe('primitives / html / LinearGradient', () => {
  it('has displayName `LinearGradient`', () => {
    equal(LinearGradient.Component.displayName, 'LinearGradient')
  })

  it('is an `linearGradient` tag that gets all props', () => {
    const renderer = create(<LinearGradient.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'linearGradient')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
