/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Option from './Option'
import { equal } from 'assert'

describe('primitives / html / Option', () => {
  it('has displayName `Option`', () => {
    equal(Option.Component.displayName, 'Option')
  })

  it('is an `option` tag that gets all props', () => {
    const renderer = create(<Option.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'option')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
