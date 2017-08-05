/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Use from './Use'
import { equal } from 'assert'

describe('primitives / html / Use', () => {
  it('has displayName `Use`', () => {
    equal(Use.Component.displayName, 'Use')
  })

  it('is an `use` tag that gets all props', () => {
    const renderer = create(<Use.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'use')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
