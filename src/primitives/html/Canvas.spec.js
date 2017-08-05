/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Canvas from './Canvas'
import { equal } from 'assert'

describe('primitives / html / Canvas', () => {
  it('has displayName `Canvas`', () => {
    equal(Canvas.Component.displayName, 'Canvas')
  })

  it('is an `canvas` tag that gets all props', () => {
    const renderer = create(<Canvas.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'canvas')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
