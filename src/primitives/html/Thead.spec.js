/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Thead from './Thead'
import { equal } from 'assert'

describe('primitives / html / Thead', () => {
  it('has displayName `Thead`', () => {
    equal(Thead.Component.displayName, 'Thead')
  })

  it('is an `thead` tag that gets all props', () => {
    const renderer = create(<Thead.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'thead')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
