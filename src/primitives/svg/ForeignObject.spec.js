/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import ForeignObject from './ForeignObject'
import { equal } from 'assert'

describe('primitives / html / ForeignObject', () => {
  it('has displayName `ForeignObject`', () => {
    equal(ForeignObject.Component.displayName, 'ForeignObject')
  })

  it('is an `foreignObject` tag that gets all props', () => {
    const renderer = create(<ForeignObject.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'foreignObject')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
