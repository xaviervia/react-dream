/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Animate from './Animate'
import { equal } from 'assert'

describe('primitives / html / Animate', () => {
  it('has displayName `Animate`', () => {
    equal(Animate.Component.displayName, 'Animate')
  })

  it('is an `animate` tag that gets all props', () => {
    const renderer = create(<Animate.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'animate')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
