/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Ul from './Ul'
import { equal } from 'assert'

describe('primitives / html / Ul', () => {
  it('has displayName `Ul`', () => {
    equal(Ul.Component.displayName, 'Ul')
  })

  it('is an `ul` tag that gets all props', () => {
    const renderer = create(<Ul.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'ul')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
