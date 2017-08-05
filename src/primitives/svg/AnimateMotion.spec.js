/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import AnimateMotion from './AnimateMotion'
import { equal } from 'assert'

describe('primitives / html / AnimateMotion', () => {
  it('has displayName `AnimateMotion`', () => {
    equal(AnimateMotion.Component.displayName, 'AnimateMotion')
  })

  it('is an `animateMotion` tag that gets all props', () => {
    const renderer = create(<AnimateMotion.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'animateMotion')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
