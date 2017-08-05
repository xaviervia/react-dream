/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Basefont from './Basefont'
import { equal } from 'assert'

describe('primitives / html / Basefont', () => {
  it('has displayName `Basefont`', () => {
    equal(Basefont.Component.displayName, 'Basefont')
  })

  it('is an `basefont` tag that gets all props', () => {
    const renderer = create(<Basefont.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'basefont')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
