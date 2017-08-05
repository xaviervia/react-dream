/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import AnimateTransform from './AnimateTransform'
import { equal } from 'assert'

describe('primitives / html / AnimateTransform', () => {
  it('has displayName `AnimateTransform`', () => {
    equal(AnimateTransform.Component.displayName, 'AnimateTransform')
  })

  it('is an `animateTransform` tag that gets all props', () => {
    const renderer = create(<AnimateTransform.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'animateTransform')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
