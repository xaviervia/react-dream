/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Tfoot from './Tfoot'
import { equal } from 'assert'

describe('primitives / html / Tfoot', () => {
  it('has displayName `Tfoot`', () => {
    equal(Tfoot.Component.displayName, 'Tfoot')
  })

  it('is an `tfoot` tag that gets all props', () => {
    const renderer = create(<Tfoot.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'tfoot')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
