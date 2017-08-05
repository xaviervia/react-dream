/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Pre from './Pre'
import { equal } from 'assert'

describe('primitives / html / Pre', () => {
  it('has displayName `Pre`', () => {
    equal(Pre.Component.displayName, 'Pre')
  })

  it('is an `pre` tag that gets all props', () => {
    const renderer = create(<Pre.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'pre')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
