/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Span from './Span'
import { equal } from 'assert'

describe('primitives / html / Span', () => {
  it('has displayName `Span`', () => {
    equal(Span.Component.displayName, 'Span')
  })

  it('is an `span` tag that gets all props', () => {
    const renderer = create(<Span.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'span')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
