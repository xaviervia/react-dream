/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Set from './Set'
import { equal } from 'assert'

describe('primitives / html / Set', () => {
  it('has displayName `Set`', () => {
    equal(Set.Component.displayName, 'Set')
  })

  it('is an `set` tag that gets all props', () => {
    const renderer = create(<Set.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'set')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
