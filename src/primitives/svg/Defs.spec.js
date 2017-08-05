/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Defs from './Defs'
import { equal } from 'assert'

describe('primitives / html / Defs', () => {
  it('has displayName `Defs`', () => {
    equal(Defs.Component.displayName, 'Defs')
  })

  it('is an `defs` tag that gets all props', () => {
    const renderer = create(<Defs.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'defs')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
