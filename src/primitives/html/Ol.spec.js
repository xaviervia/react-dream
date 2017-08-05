/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Ol from './Ol'
import { equal } from 'assert'

describe('primitives / html / Ol', () => {
  it('has displayName `Ol`', () => {
    equal(Ol.Component.displayName, 'Ol')
  })

  it('is an `ol` tag that gets all props', () => {
    const renderer = create(<Ol.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'ol')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
