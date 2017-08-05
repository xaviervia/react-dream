/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Frame from './Frame'
import { equal } from 'assert'

describe('primitives / html / Frame', () => {
  it('has displayName `Frame`', () => {
    equal(Frame.Component.displayName, 'Frame')
  })

  it('is an `frame` tag that gets all props', () => {
    const renderer = create(<Frame.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'frame')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
