/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Polyline from './Polyline'
import { equal } from 'assert'

describe('primitives / html / Polyline', () => {
  it('has displayName `Polyline`', () => {
    equal(Polyline.Component.displayName, 'Polyline')
  })

  it('is an `polyline` tag that gets all props', () => {
    const renderer = create(<Polyline.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'polyline')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
