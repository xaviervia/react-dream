/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Big from './Big'
import { equal } from 'assert'

describe('primitives / html / Big', () => {
  it('has displayName `Big`', () => {
    equal(Big.Component.displayName, 'Big')
  })

  it('is an `big` tag that gets all props', () => {
    const renderer = create(<Big.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'big')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
