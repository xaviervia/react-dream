/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import RadialGradient from './RadialGradient'
import { equal } from 'assert'

describe('primitives / html / RadialGradient', () => {
  it('has displayName `RadialGradient`', () => {
    equal(RadialGradient.Component.displayName, 'RadialGradient')
  })

  it('is an `radialGradient` tag that gets all props', () => {
    const renderer = create(<RadialGradient.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'radialGradient')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
