/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import TextPath from './TextPath'
import { equal } from 'assert'

describe('primitives / html / TextPath', () => {
  it('has displayName `TextPath`', () => {
    equal(TextPath.Component.displayName, 'TextPath')
  })

  it('is an `textPath` tag that gets all props', () => {
    const renderer = create(<TextPath.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'textPath')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
