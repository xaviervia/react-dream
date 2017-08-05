/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Stop from './Stop'
import { equal } from 'assert'

describe('primitives / html / Stop', () => {
  it('has displayName `Stop`', () => {
    equal(Stop.Component.displayName, 'Stop')
  })

  it('is an `stop` tag that gets all props', () => {
    const renderer = create(<Stop.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'stop')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
