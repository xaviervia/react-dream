/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Html from './Html'
import { equal } from 'assert'

describe('primitives / html / Html', () => {
  it('has displayName `Html`', () => {
    equal(Html.Component.displayName, 'Html')
  })

  it('is an `html` tag that gets all props', () => {
    const renderer = create(<Html.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'html')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
