/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Rt from './Rt'
import { equal } from 'assert'

describe('primitives / html / Rt', () => {
  it('has displayName `Rt`', () => {
    equal(Rt.Component.displayName, 'Rt')
  })

  it('is an `rt` tag that gets all props', () => {
    const renderer = create(<Rt.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'rt')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
