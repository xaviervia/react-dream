/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Output from './Output'
import { equal } from 'assert'

describe('primitives / html / Output', () => {
  it('has displayName `Output`', () => {
    equal(Output.Component.displayName, 'Output')
  })

  it('is an `output` tag that gets all props', () => {
    const renderer = create(<Output.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'output')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
