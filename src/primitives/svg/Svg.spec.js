/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Svg from './Svg'
import { equal } from 'assert'

describe('primitives / html / Svg', () => {
  it('has displayName `Svg`', () => {
    equal(Svg.Component.displayName, 'Svg')
  })

  it('is an `svg` tag that gets all props', () => {
    const renderer = create(<Svg.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'svg')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
