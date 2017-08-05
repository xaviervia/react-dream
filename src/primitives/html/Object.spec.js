/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Object from './Object'
import { equal } from 'assert'

describe('primitives / html / Object', () => {
  it('has displayName `Object`', () => {
    equal(Object.Component.displayName, 'Object')
  })

  it('is an `object` tag that gets all props', () => {
    const renderer = create(<Object.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'object')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
