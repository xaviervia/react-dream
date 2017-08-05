/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Line from './Line'
import { equal } from 'assert'

describe('primitives / html / Line', () => {
  it('has displayName `Line`', () => {
    equal(Line.Component.displayName, 'Line')
  })

  it('is an `line` tag that gets all props', () => {
    const renderer = create(<Line.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'line')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
