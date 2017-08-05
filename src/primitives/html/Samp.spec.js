/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Samp from './Samp'
import { equal } from 'assert'

describe('primitives / html / Samp', () => {
  it('has displayName `Samp`', () => {
    equal(Samp.Component.displayName, 'Samp')
  })

  it('is an `samp` tag that gets all props', () => {
    const renderer = create(<Samp.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'samp')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
