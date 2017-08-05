/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Sub from './Sub'
import { equal } from 'assert'

describe('primitives / html / Sub', () => {
  it('has displayName `Sub`', () => {
    equal(Sub.Component.displayName, 'Sub')
  })

  it('is an `sub` tag that gets all props', () => {
    const renderer = create(<Sub.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'sub')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
