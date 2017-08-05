/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Source from './Source'
import { equal } from 'assert'

describe('primitives / html / Source', () => {
  it('has displayName `Source`', () => {
    equal(Source.Component.displayName, 'Source')
  })

  it('is an `source` tag that gets all props', () => {
    const renderer = create(<Source.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'source')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
