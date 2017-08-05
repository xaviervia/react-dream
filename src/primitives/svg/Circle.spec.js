/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Circle from './Circle'
import { equal } from 'assert'

describe('primitives / html / Circle', () => {
  it('has displayName `Circle`', () => {
    equal(Circle.Component.displayName, 'Circle')
  })

  it('is an `circle` tag that gets all props', () => {
    const renderer = create(<Circle.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'circle')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
