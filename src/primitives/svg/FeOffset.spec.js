/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeOffset from './FeOffset'
import { equal } from 'assert'

describe('primitives / html / FeOffset', () => {
  it('has displayName `FeOffset`', () => {
    equal(FeOffset.Component.displayName, 'FeOffset')
  })

  it('is an `feOffset` tag that gets all props', () => {
    const renderer = create(<FeOffset.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feOffset')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
