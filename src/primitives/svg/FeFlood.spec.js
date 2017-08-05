/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeFlood from './FeFlood'
import { equal } from 'assert'

describe('primitives / html / FeFlood', () => {
  it('has displayName `FeFlood`', () => {
    equal(FeFlood.Component.displayName, 'FeFlood')
  })

  it('is an `feFlood` tag that gets all props', () => {
    const renderer = create(<FeFlood.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feFlood')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
