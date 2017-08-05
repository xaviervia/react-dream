/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Vkern from './Vkern'
import { equal } from 'assert'

describe('primitives / html / Vkern', () => {
  it('has displayName `Vkern`', () => {
    equal(Vkern.Component.displayName, 'Vkern')
  })

  it('is an `vkern` tag that gets all props', () => {
    const renderer = create(<Vkern.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'vkern')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
