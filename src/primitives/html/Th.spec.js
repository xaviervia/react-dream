/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Th from './Th'
import { equal } from 'assert'

describe('primitives / html / Th', () => {
  it('has displayName `Th`', () => {
    equal(Th.Component.displayName, 'Th')
  })

  it('is an `th` tag that gets all props', () => {
    const renderer = create(<Th.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'th')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
