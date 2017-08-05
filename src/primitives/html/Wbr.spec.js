/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Wbr from './Wbr'
import { equal } from 'assert'

describe('primitives / html / Wbr', () => {
  it('has displayName `Wbr`', () => {
    equal(Wbr.Component.displayName, 'Wbr')
  })

  it('is an `wbr` tag that gets all props', () => {
    const renderer = create(<Wbr.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'wbr')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
