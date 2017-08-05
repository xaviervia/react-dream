/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Ruby from './Ruby'
import { equal } from 'assert'

describe('primitives / html / Ruby', () => {
  it('has displayName `Ruby`', () => {
    equal(Ruby.Component.displayName, 'Ruby')
  })

  it('is an `ruby` tag that gets all props', () => {
    const renderer = create(<Ruby.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'ruby')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
