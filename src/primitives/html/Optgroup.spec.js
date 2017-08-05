/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Optgroup from './Optgroup'
import { equal } from 'assert'

describe('primitives / html / Optgroup', () => {
  it('has displayName `Optgroup`', () => {
    equal(Optgroup.Component.displayName, 'Optgroup')
  })

  it('is an `optgroup` tag that gets all props', () => {
    const renderer = create(<Optgroup.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'optgroup')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
