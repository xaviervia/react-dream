/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Noscript from './Noscript'
import { equal } from 'assert'

describe('primitives / html / Noscript', () => {
  it('has displayName `Noscript`', () => {
    equal(Noscript.Component.displayName, 'Noscript')
  })

  it('is an `noscript` tag that gets all props', () => {
    const renderer = create(<Noscript.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'noscript')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
