/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Symbol from './Symbol'
import { equal } from 'assert'

describe('primitives / html / Symbol', () => {
  it('has displayName `Symbol`', () => {
    equal(Symbol.Component.displayName, 'Symbol')
  })

  it('is an `symbol` tag that gets all props', () => {
    const renderer = create(<Symbol.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'symbol')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
