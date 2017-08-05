/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Dfn from './Dfn'
import { equal } from 'assert'

describe('primitives / html / Dfn', () => {
  it('has displayName `Dfn`', () => {
    equal(Dfn.Component.displayName, 'Dfn')
  })

  it('is an `dfn` tag that gets all props', () => {
    const renderer = create(<Dfn.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'dfn')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
