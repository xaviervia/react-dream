/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Var from './Var'
import { equal } from 'assert'

describe('primitives / html / Var', () => {
  it('has displayName `Var`', () => {
    equal(Var.Component.displayName, 'Var')
  })

  it('is an `var` tag that gets all props', () => {
    const renderer = create(<Var.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'var')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
