/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Meter from './Meter'
import { equal } from 'assert'

describe('primitives / html / Meter', () => {
  it('has displayName `Meter`', () => {
    equal(Meter.Component.displayName, 'Meter')
  })

  it('is an `meter` tag that gets all props', () => {
    const renderer = create(<Meter.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'meter')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
