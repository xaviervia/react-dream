/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Pattern from './Pattern'
import { equal } from 'assert'

describe('primitives / html / Pattern', () => {
  it('has displayName `Pattern`', () => {
    equal(Pattern.Component.displayName, 'Pattern')
  })

  it('is an `pattern` tag that gets all props', () => {
    const renderer = create(<Pattern.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'pattern')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
