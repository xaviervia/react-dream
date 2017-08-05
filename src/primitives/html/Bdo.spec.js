/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Bdo from './Bdo'
import { equal } from 'assert'

describe('primitives / html / Bdo', () => {
  it('has displayName `Bdo`', () => {
    equal(Bdo.Component.displayName, 'Bdo')
  })

  it('is an `bdo` tag that gets all props', () => {
    const renderer = create(<Bdo.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'bdo')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
