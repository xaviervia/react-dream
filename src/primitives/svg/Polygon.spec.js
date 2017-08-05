/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Polygon from './Polygon'
import { equal } from 'assert'

describe('primitives / html / Polygon', () => {
  it('has displayName `Polygon`', () => {
    equal(Polygon.Component.displayName, 'Polygon')
  })

  it('is an `polygon` tag that gets all props', () => {
    const renderer = create(<Polygon.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'polygon')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
