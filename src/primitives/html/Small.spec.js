/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Small from './Small'
import { equal } from 'assert'

describe('primitives / html / Small', () => {
  it('has displayName `Small`', () => {
    equal(Small.Component.displayName, 'Small')
  })

  it('is an `small` tag that gets all props', () => {
    const renderer = create(<Small.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'small')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
