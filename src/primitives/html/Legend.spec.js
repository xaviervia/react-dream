/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Legend from './Legend'
import { equal } from 'assert'

describe('primitives / html / Legend', () => {
  it('has displayName `Legend`', () => {
    equal(Legend.Component.displayName, 'Legend')
  })

  it('is an `legend` tag that gets all props', () => {
    const renderer = create(<Legend.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'legend')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
