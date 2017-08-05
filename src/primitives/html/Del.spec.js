/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Del from './Del'
import { equal } from 'assert'

describe('primitives / html / Del', () => {
  it('has displayName `Del`', () => {
    equal(Del.Component.displayName, 'Del')
  })

  it('is an `del` tag that gets all props', () => {
    const renderer = create(<Del.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'del')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
