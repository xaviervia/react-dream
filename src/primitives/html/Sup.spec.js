/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Sup from './Sup'
import { equal } from 'assert'

describe('primitives / html / Sup', () => {
  it('has displayName `Sup`', () => {
    equal(Sup.Component.displayName, 'Sup')
  })

  it('is an `sup` tag that gets all props', () => {
    const renderer = create(<Sup.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'sup')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
