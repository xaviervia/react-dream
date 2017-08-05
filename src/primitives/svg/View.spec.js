/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import View from './View'
import { equal } from 'assert'

describe('primitives / html / View', () => {
  it('has displayName `View`', () => {
    equal(View.Component.displayName, 'View')
  })

  it('is an `view` tag that gets all props', () => {
    const renderer = create(<View.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'view')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
