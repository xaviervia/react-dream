/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Figcaption from './Figcaption'
import { equal } from 'assert'

describe('primitives / html / Figcaption', () => {
  it('has displayName `Figcaption`', () => {
    equal(Figcaption.Component.displayName, 'Figcaption')
  })

  it('is an `figcaption` tag that gets all props', () => {
    const renderer = create(<Figcaption.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'figcaption')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
