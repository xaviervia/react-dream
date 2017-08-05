/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Figure from './Figure'
import { equal } from 'assert'

describe('primitives / html / Figure', () => {
  it('has displayName `Figure`', () => {
    equal(Figure.Component.displayName, 'Figure')
  })

  it('is an `figure` tag that gets all props', () => {
    const renderer = create(<Figure.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'figure')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
