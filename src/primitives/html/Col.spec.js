/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Col from './Col'
import { equal } from 'assert'

describe('primitives / html / Col', () => {
  it('has displayName `Col`', () => {
    equal(Col.Component.displayName, 'Col')
  })

  it('is an `col` tag that gets all props', () => {
    const renderer = create(<Col.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'col')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
