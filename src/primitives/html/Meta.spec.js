/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Meta from './Meta'
import { equal } from 'assert'

describe('primitives / html / Meta', () => {
  it('has displayName `Meta`', () => {
    equal(Meta.Component.displayName, 'Meta')
  })

  it('is an `meta` tag that gets all props', () => {
    const renderer = create(<Meta.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'meta')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
