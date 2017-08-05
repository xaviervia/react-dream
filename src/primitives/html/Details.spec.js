/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Details from './Details'
import { equal } from 'assert'

describe('primitives / html / Details', () => {
  it('has displayName `Details`', () => {
    equal(Details.Component.displayName, 'Details')
  })

  it('is an `details` tag that gets all props', () => {
    const renderer = create(<Details.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'details')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
