/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Br from './Br'
import { equal } from 'assert'

describe('primitives / html / Br', () => {
  it('has displayName `Br`', () => {
    equal(Br.Component.displayName, 'Br')
  })

  it('is an `br` tag that gets all props', () => {
    const renderer = create(<Br.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'br')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
