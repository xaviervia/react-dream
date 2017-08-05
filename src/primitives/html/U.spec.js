/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import U from './U'
import { equal } from 'assert'

describe('primitives / html / U', () => {
  it('has displayName `U`', () => {
    equal(U.Component.displayName, 'U')
  })

  it('is an `u` tag that gets all props', () => {
    const renderer = create(<U.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'u')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
