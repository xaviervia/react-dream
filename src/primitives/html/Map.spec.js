/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Map from './Map'
import { equal } from 'assert'

describe('primitives / html / Map', () => {
  it('has displayName `Map`', () => {
    equal(Map.Component.displayName, 'Map')
  })

  it('is an `map` tag that gets all props', () => {
    const renderer = create(<Map.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'map')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
