/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import H5 from './H5'
import { equal } from 'assert'

describe('primitives / html / H5', () => {
  it('has displayName `H5`', () => {
    equal(H5.Component.displayName, 'H5')
  })

  it('is an `h5` tag that gets all props', () => {
    const renderer = create(<H5.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'h5')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
