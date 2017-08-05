/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Abbr from './Abbr'
import { equal } from 'assert'

describe('primitives / html / Abbr', () => {
  it('has displayName `Abbr`', () => {
    equal(Abbr.Component.displayName, 'Abbr')
  })

  it('is an `abbr` tag that gets all props', () => {
    const renderer = create(<Abbr.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'abbr')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
