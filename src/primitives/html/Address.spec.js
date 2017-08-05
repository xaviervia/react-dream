/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Address from './Address'
import { equal } from 'assert'

describe('primitives / html / Address', () => {
  it('has displayName `Address`', () => {
    equal(Address.Component.displayName, 'Address')
  })

  it('is an `address` tag that gets all props', () => {
    const renderer = create(<Address.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'address')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
