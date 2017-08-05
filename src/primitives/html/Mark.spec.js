/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Mark from './Mark'
import { equal } from 'assert'

describe('primitives / html / Mark', () => {
  it('has displayName `Mark`', () => {
    equal(Mark.Component.displayName, 'Mark')
  })

  it('is an `mark` tag that gets all props', () => {
    const renderer = create(<Mark.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'mark')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
