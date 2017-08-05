/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Time from './Time'
import { equal } from 'assert'

describe('primitives / html / Time', () => {
  it('has displayName `Time`', () => {
    equal(Time.Component.displayName, 'Time')
  })

  it('is an `time` tag that gets all props', () => {
    const renderer = create(<Time.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'time')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
