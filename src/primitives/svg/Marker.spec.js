/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Marker from './Marker'
import { equal } from 'assert'

describe('primitives / html / Marker', () => {
  it('has displayName `Marker`', () => {
    equal(Marker.Component.displayName, 'Marker')
  })

  it('is an `marker` tag that gets all props', () => {
    const renderer = create(<Marker.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'marker')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
