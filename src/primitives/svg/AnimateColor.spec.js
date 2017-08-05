/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import AnimateColor from './AnimateColor'
import { equal } from 'assert'

describe('primitives / html / AnimateColor', () => {
  it('has displayName `AnimateColor`', () => {
    equal(AnimateColor.Component.displayName, 'AnimateColor')
  })

  it('is an `animateColor` tag that gets all props', () => {
    const renderer = create(<AnimateColor.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'animateColor')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
