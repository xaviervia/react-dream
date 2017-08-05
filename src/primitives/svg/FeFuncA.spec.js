/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeFuncA from './FeFuncA'
import { equal } from 'assert'

describe('primitives / html / FeFuncA', () => {
  it('has displayName `FeFuncA`', () => {
    equal(FeFuncA.Component.displayName, 'FeFuncA')
  })

  it('is an `feFuncA` tag that gets all props', () => {
    const renderer = create(<FeFuncA.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feFuncA')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
